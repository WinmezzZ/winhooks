const { defineConfig } = require('@winme/webpack-scripts');
const path = require('path');
const remarkGfm = require('remark-gfm');

module.exports = defineConfig({
  htmlTemplatePath: 'index.html',
  webpack: async config => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [
        {
          loader: '@mdx-js/loader',
          /** @type {import('@mdx-js/loader').Options} */
          options: {
            remarkPlugins: [remarkGfm],
          },
        },
      ],
    });

    config.resolve.alias = {
      '@winme/react-hooks': path.resolve(__dirname, 'lib/index'),
      '@lib': path.resolve(__dirname, 'lib'),
      '@docs': path.resolve(__dirname, 'docs'),
      '@': path.resolve(__dirname, 'src'),
    };

    return config;
  },
});
