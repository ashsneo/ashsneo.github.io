import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import expressiveCode from "astro-expressive-code";
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    expressiveCode({
      themes: ["dark-plus"],
      plugins: [{
      }],
      useThemedScrollbars: false,
      useThemedSelectionColors: false,
      styleOverrides: {
        uiLineHeight: "inherit",
        codeFontSize: "0.875rem",
        codeLineHeight: "1.25rem",
        borderRadius: "4px",
        borderWidth: "0px",
        codePaddingInline: "1rem",
        codeFontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'
      }
    }),
    vue()
  ],
  markdown: {
    shikiConfig: {
      themes: {
        light: 'light-plus',
        dark: 'dark-plus'
      },
      wrap: false
    },
    remarkPlugins: [remarkReadingTime],
  },
});