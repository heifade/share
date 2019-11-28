## TypeScript

### [参考资料](https://www.tslang.cn/docs/home.html)

### 前言

TypeScript(以下简称 TS)是一种由微软开发的自由和开源的编程语言。它是 JS 的一个超集。 C#的首席架构师 Anders Hejlsberg，已工作于 TS 的开发。
TS 扩展了 JS 的语法，所以任何现有的 JS 程序可以不加改变的在 TS 下工作。TS 是为大型应用之开发而设计，而编译时它产生 JS 以确保兼容性。
Google 公司与微软合作，用 TS 写了 Angular2

### TS 支持请况

![](./imgs/p1.png)
![](./imgs/p2.png)
![](./imgs/p3.png)
![](./imgs/p4.png)
![](./imgs/p5.png)

### TS 的安装

```cmd
npm i typescript -g
```

### 编译

```cmd
tsc index.ts  # 编译 index.ts 成 index.js
tsc *.ts  # 编译 当前目录下的所有.ts 文件 成 .js
tsc # 根据 tsconfig.json 配置来编译
```

### [配置文件 tsconfig.json](./demo/demo-tsconfig.json/README.md)
<a name="tsconfigjson"></a>
如果一个目录存在 tsconfig.json，这个目录就是 TS 项目的根目录

- 命令 tsc 且参数为 \*.ts，编译此.ts 文件成 .js
- 不带任何输入文件的情况下调用 tsc，编译器会在当前目录查找 tsconfig.json 文件，如果当前目录没有，逐级向上搜索。
- 不带任何输入文件的情况下调用 tsc，且参数 --project 或 -p 指定一个包含 tsconfig.json 文件的目录

### 特性

- 强类型
- 类型批注和编译时类型检查
- 类
- 泛型
- 接口
- 模块

### [基础类型](./demo/demo-basetype/README.md)

<a name="basetype"></a>

### 变量声明

- 支持 es6 的变量声明，var，let，const

### 类型断言

- 类型断言好比其它语言里的类型转换，两种方式： as 与 <类型>，这两种方式等价

### 接口

接口的作用就是为类型命名和为你的代码或第三方代码定义契约

### 接口可选属性

在属性后面加“？”，变成可选属性

### 接口只读属性

### 函数类型接口

### 类接口

接口描述了类的公共部分，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

### 接口继承

- 继承一个
- 继承多个

### 函数

### 泛型

### 类型兼容性

### 交叉类型

### 联合类型 

### 类

### 类中访问修饰符

### 构造函数用 protected 修饰时

### 类只读属性

### 类的兼容性

### 抽象类

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

### 编译 tsc
