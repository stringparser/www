/* eslint-disable no-undef */
const withCSS = require("@zeit/next-css");
const withFonts = require("next-fonts");
const withOptimizedImages = require("next-optimized-images");

const emoji = require("remark-emoji");
const images = require("remark-images");
const dropcap = require('remark-dropcap');

exports = module.exports = (nextConfig = {}) => {

  return withCSS(
    withFonts(
      withOptimizedImages({
        pageExtensions: [
          "ts",
          "tsx",
          "md",
          "mdx"
        ],

        webpack(config, options) {
          config.node = {
            fs: "empty"
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
                    images,
                    dropcap
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
