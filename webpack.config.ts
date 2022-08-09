const path = require("path");
const ReactRefreshPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

module.exports = {
  mode: "development", // 실서비스 : production
  devtool: "eval",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx", "css"],
  }, // 모듈 해석에 대한 설정
  entry: {
    app: "/src/index",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options: { plugins: ["react-refresh/babel"] },
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname, "node_modules"),
      },
    ],
  },
  plugins: [new ReactRefreshPlugin()], // 추가 확장 프로그램
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
