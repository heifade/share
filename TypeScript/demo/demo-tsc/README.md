### 编译 index.ts 成 index.js

```cmd
tsc index.ts
```

### 编译 当前目录下的所有.ts 文件 成 .js

```cmd
tsc *.ts
```

### 将 a.ts 编译成 a.js 输出目录是 dist 并生成 sourceMap

```cmd
tsc --outDir dist --sourceMap a.ts
```

### 可以将 命令参数放到 args.txt 文件里

```cmd
tsc @args.txt
```

### 根据 tsconfig.json 配置来编译

```cmd
tsc
```
