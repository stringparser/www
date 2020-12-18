/* eslint-disable no-undef */
const withCSS = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withOptimizedImages = require('next-optimized-images');

const emoji = require('remark-emoji');
const images = require('remark-images');

exports = module.exports = (nextConfig = {}) => {

  return withCSS(
    withFonts(
      withOptimizedImages({
        pageExtensions: [
          'md',
          'ts',
          'mdx',
          'tsx',
        ],

        webpack(config, options) {
          config.node = {
            fs: 'empty'
          };

          config.module.rules.push({
            test: /\.mdx$/,
            use: [
              options.defaultLoaders.babel,
              {
                loader: '@mdx-js/loader',
                options: {
                  remarkPlugins: [
                    emoji,
                    images
                  ]
                },
              },
            ],
          })

          if (typeof nextConfig.webpack === 'function') {
            return nextConfig.webpack(config, options)
          }

          return config;
        }
      })
    )
  );
};
