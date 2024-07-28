const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = [
  {
    mode: "production",
    entry: "./src/main.ts",
    target: "electron-main",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "main.js",
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  },
  {
    mode: "production",
    entry: "./src/preload.ts",
    target: "electron-preload",
    module: {
      rules: [
        {
          test: /\.ts$/,
          include: /src/,
          use: [{ loader: "ts-loader" }],
        },
      ],
    },
    output: {
      path: path.resolve(__dirname, "./dist"),
      filename: "preload.js",
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  },
];
