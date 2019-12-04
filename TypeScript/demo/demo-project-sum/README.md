### package.json

```json
{
  "name": "demo-project-sum", // 发布到 npm 上的项目名称，要求唯一
  "version": "1.0.1",
  "description": "求两数之和",
  "main": "dist/sum.js", // js 项目入口文件
  "module": "dist/sum.js", // es 项目入口文件
  "typings": "dist/sum.d.ts", // ts 项目入口文件
  "scripts": {
    "build": "tsc",
    "start": "ts-node ./src/index.ts"
  },
  "files": [
    "dist" // 发布到npm 上的目录
  ],
  "keywords": ["学习TS"],
  "author": "heifade",
  "license": "ISC",
  "devDependencies": {
    "ts-node": "^8.5.4",
    "typescript": "^3.7.2"
  }
}
```

### 发布命令

```cmd
npm publish
```
