import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import typescript from "rollup-plugin-typescript";

export default {
  input: "src/index.ts",
  output: {
    dir: "./dist",
    format: "cjs"
  },
  plugins: [
    typescript(),
    json(),
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: "node_modules"
      }
    }),
    commonjs()
  ]
};
