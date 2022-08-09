const path = require("path");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development", // 실서비스 : production
  devtool: "eval",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".js", ".jsx", "css"],
  }, // 모듈 해석에 대한 설정
  entry: {
    app: "/src/index",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env", // 브라우저 버전에 따라 대응
              {
                targets: {
                  browsers: ["> 5% in KR", "last 2 chrome versions"],
                },
                debug: true,
              },
            ],
            "@babel/preset-react",
          ], //preset은 plugin들의 모음
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },
  plugins: [new ReactRefreshWebpackPlugin()], // 추가 확장 프로그램
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    devMiddleware: { publicPath: "/dist" }, // webpack이 빌드한 파일 위치
    static: { directory: path.resolve(__dirname) }, // index.html 위치
    hot: true,
  },
};
