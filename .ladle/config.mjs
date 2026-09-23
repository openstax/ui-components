export default {
  base: '/ui-components/',
  outDir: 'docs',
  mode: 'preview',
  viteConfig: '.ladle/vite.config.ts',
  addons: {
    width: {
      options: {
        narrow: 320,
        medium: 720,
        large: 1200
      },
    }
  }
};
