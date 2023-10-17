import { defineConfig } from "vite";

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  define: {
    "process.env": JSON.stringify({}),
    "global": "window",
  },
});
