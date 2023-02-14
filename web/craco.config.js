const path = require('path')
const CracoLessPlugin = require("craco-less");
// console.log(process.env.NODE_ENV);
module.exports = {
  eslint: {
    enable: true /* (default value) */,
    mode: "extends", /* (default value) */
    configure: {
      "extends": "react-app",
      "rules": {
        "jsx-a11y/anchor-is-valid": "off"
      }
    },
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.module.rules[1].oneOf = [
        ...[
          {
            test: /\.svg$/,
            // include: [path.resolve('src/icon')],
            include: [path.resolve(__dirname, 'src/icon')],
            use: [
              { loader: 'svg-sprite-loader', options: {} },
              {
                loader: 'svgo-loader',
                options: {
                  plugins: [
                    // 插件名字必须加
                    {
                      name: 'removeAttrs',
                      params: {
                        attrs: '(fill|stroke)',
                      },
                    },
                  ],
                },
              },
            ],
          },
        ],
        ...webpackConfig.module.rules[1].oneOf,
      ];
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
            javascriptEnabled: true
          }
        }
      }
    }
  ],
  devServer: {
    proxy: {
      '/proxy': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true,
        pathRewrite: {
          "^/proxy": ''
        }
      }
    },
  },
}