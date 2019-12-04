## TypeScript 项目

### 初始化项目

```cmd
npm init -y
```

### package.json

```json
{
  "name": "demo-project", // 项目名称
  "version": "1.0.0", // 项目版本号
  "description": "", // 说明
  "main": "index.js", // 入口文件
  "scripts": {
    "build": "tsc", // 可通过 命令 npm run build 运行
    "start": "node ./dist/index.js" // 可通过 命令 npm run start
  },
  "keywords": [], // 关键字
  "author": "", // 作者
  "license": "ISC", // 许可证
  "devDependencies": {
    "typescript": "^3.7.2", // 开发依赖
    "demo-project-sum": "1.0.1" // 开发依赖
  }
}
```

### 安装依赖

```cmd
npm i demo-project-sum -D
```
