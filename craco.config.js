const CracoLessPlugin = require("craco-less");
const path = require("path"); // 添加这一行
module.exports = {
  style: {
    postcss: {
      plugins: [require("postcss-import"), require("autoprefixer")],
    },
  },
  webpack: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "src"),
    },
    configure: (webpackConfig) => {
      webpackConfig.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOfRule) => {
            if (oneOfRule.use) {
              // 过滤掉 resolve-url-loader
              oneOfRule.use = oneOfRule.use.filter(
                (useRule) =>
                  !(
                    useRule.loader &&
                    useRule.loader.includes("resolve-url-loader")
                  )
              );
            }
          });
        }
      });
      return webpackConfig;
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
            sourceMap: false,
          },
        },
      },
    },
  ],
};
