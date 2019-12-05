import { Configuration } from "webpack";
import { resolve } from "path";

export default () => {
  const config: Configuration = {
    mode: "development", // production
    entry: {
      index: "./src/index.ts"
    },
    output: {
      path: resolve(__dirname, "dist")
    },
    target: "node",
    resolve: {
      extensions: [".js", ".ts", ".json"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    }
  };
  return config;
};
