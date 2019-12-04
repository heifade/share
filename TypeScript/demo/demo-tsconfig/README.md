_如果一个目录存在 tsconfig.json，这个目录就是 TS 项目的根目录_

- 不带任何输入文件的情况下调用 tsc，编译器会在当前目录查找 tsconfig.json 文件，如果当前目录没有，逐级向上搜索。
- 不带任何输入文件的情况下调用 tsc，且参数 --project 或 -p 指定一个包含 tsconfig.json 文件的目录

## tsconfig.json

```json
{
  "compilerOptions": {
    "module": "commonjs",
    "noImplicitAny": true,
    "outDir": "dist",
    "sourceMap": true
  },
  "files": ["src/a.ts", "src/b.ts"],
  "include": ["src/**/*"],
  "exclude": ["src/a.ts", "src/c.ts"]
}
```

### 配置说明

- compilerOptions 可以为空，[默认值见](https://www.tslang.cn/docs/handbook/compiler-options.html)

- files 指定 ts 源文件
- include 指定 ts 源文件
- exclude 排除 ts 源文件

_使用"include"引入的文件可以使用"exclude"属性过滤，但"exclude"不能过滤"files"中的文件。上面例子中 src/c.ts 将不会被编译_

### 通配符

- \* 匹配 0 或多个字符（不包括目录分隔符）
- \? 匹配一个任意字符（不包括目录分隔符）
- \*\*\/ 递归匹配任意子目录
