import fs from 'fs';
import path from 'path';
import renderer from 'react-test-renderer';
import { palette } from '../theme/palette';
import { CloseModalButton } from './CloseModalButton';

describe('CloseModalButton', () => {
  it('should render with default styles', () => {
    const tree = renderer.create(<CloseModalButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with error variant styles', () => {
    const tree = renderer.create(<CloseModalButton variant="error" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render with inverted-circle variant styles', () => {
    const tree = renderer.create(<CloseModalButton variant="inverted-circle" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('CloseModalButton color', () => {
  const luminance = (hex: string) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
      .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const contrast = (a: string, b: string) => {
    const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
    return (hi + 0.05) / (lo + 0.05);
  };

  it('is 3:1 or better on the default modal header', () => {
    const css = fs.readFileSync(path.join(__dirname, 'CloseModalButton.css'), 'utf8');
    const token = /color: var\(--close-button-color, var\(--ox-color-([a-z-]+)\)\)/.exec(css)?.[1];
    const key = token?.replace(/-(\w)/g, (_, c: string) => c.toUpperCase()) as keyof typeof palette;

    expect(palette[key]).toBeDefined();
    expect(contrast(palette[key], palette.neutralLighter)).toBeGreaterThanOrEqual(3);
  });
});
