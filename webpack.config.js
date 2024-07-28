const path = require("path");

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
  },
];
