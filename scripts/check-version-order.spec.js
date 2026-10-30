const { compareVersions, highestReleaseTag } = require('./check-version-order.cjs');
const { execFileSync } = require('child_process');

const run = (version, tags) => {
  try {
    execFileSync('node', [`${__dirname}/check-version-order.cjs`, version], {input: tags.join('\n'), stdio: ['pipe', 'pipe', 'pipe']});
    return {ok: true};
  } catch (e) {
    return {ok: false, message: e.stderr.toString()};
  }
};

describe('compareVersions', () => {
  it.each([
    ['1.2.3', '1.2.3', 0],
    ['1.2.4', '1.2.3', 1],
    ['1.10.0', '1.9.0', 1],
    ['2.0.0', '1.99.99', 1],
    ['1.2.3-pre1', '1.2.3', -1],
    ['1.2.3', '1.2.3-pre1', 1],
    ['1.2.3-pre2', '1.2.3-pre1', 1],
    ['1.2.3-pre10', '1.2.3-pre2', -1],
    ['1.2.3-rc.2', '1.2.3-rc.10', -1],
    ['1.2.3-1', '1.2.3-a', -1],
    ['1.2.3-a', '1.2.3-a.1', -1],
    ['1.28.0-pre1', '1.27.1', 1],
    ['9007199254740993.0.0', '9007199254740992.0.0', 1],
    ['1.0.0', '1.0.0-9007199254740993', 1],
    ['1.0.0-9007199254740993', '1.0.0-9007199254740992', 1],
    ['1.0.0-9', '1.0.0-10', -1],
  ])('%s vs %s is %i', (a, b, expected) => {
    expect(compareVersions(a, b)).toBe(expected);
    expect(compareVersions(b, a)).toBe(expected === 0 ? 0 : -expected);
  });
});

describe('highestReleaseTag', () => {
  it('ignores pre-release tags and tags that are not release tags', () => {
    expect(highestReleaseTag(['1.26.4', '1.27.0-pre1', 'v1.15.4', '13.0.1.1', 'sentry-logger-03212025', '1.4-forms-prerelease1', 'backup/x', '1.26.3']))
      .toBe('1.26.4');
  });

  it('is undefined without release tags', () => {
    expect(highestReleaseTag(['v1.2.0', 'foo'])).toBeUndefined();
  });
});

describe('check-version-order.cjs', () => {
  const tags = ['1.25.1-pre1', '1.26.3', '1.26.4', 'v1.15.4'];

  it('accepts a version higher than every release tag', () => {
    expect(run('1.27.0', tags).ok).toBe(true);
    expect(run('1.27.0-pre1', tags).ok).toBe(true);
  });

  it('rejects a version lower than or equal to the highest release tag', () => {
    expect(run('1.26.4', tags)).toEqual({ok: false, message: 'version 1.26.4 is not higher than the release tag 1.26.4.\n'});
    expect(run('1.26.5-pre1', ['1.26.5']).ok).toBe(false);
    expect(run('1.26.0', tags).ok).toBe(false);
  });

  it('is not blocked by a pre-release tag of a later version', () => {
    expect(run('1.27.2', ['1.27.1', '1.28.0-pre1']).message).toBeUndefined();
  });

  it('accepts any version when there are no release tags', () => {
    expect(run('0.0.1', []).ok).toBe(true);
  });
});
