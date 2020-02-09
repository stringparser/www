module.exports = (phase, { defaultConfig }) => {
  const fs = require("fs");
  const path = require("path");
  const { promisify } = require("util");

  const emoji = require("remark-emoji");
  const images = require("remark-images");
  const withCSS = require("@zeit/next-css");
  const withFonts = require("next-fonts");
  const withOptimizedImages = require("next-optimized-images");

  const withMDX = require("@zeit/next-mdx")({
    extension: /\.mdx?$/,
    options: {
      remarkPlugins: [
        images,
        emoji
      ]
    }
  });

  const copyFile = promisify(fs.copyFile);

  return withCSS(
    withFonts(
      withOptimizedImages(
        withMDX({
          webpack(config, { dev }) {
            config.node = {
              fs: "empty"
            };

            return config;
          },

          pageExtensions: ["ts", "tsx", "md", "mdx"],

          async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
            if (dev) {
              return defaultPathMap;
            }
            await copyFile(
              path.join(dir, "worker.js"),
              path.join(outDir, "worker.js")
            );
            return defaultPathMap;
          }
        })
      )
    )
  );
};
