## 接口

TypeScript 的核心原则之一是对值所具有的结构进行类型检查。 在 TypeScript 里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。

### 方法的接口

```ts
function print(user: { name: string; age: number }) {
  console.log(`I am ${user.name}, I'm ${user.age} years old!`);
}

const user: { name: string; age: number } = { name: "djd", age: 25 };

print(user);
```

简化

```ts
interface IUser {
  name: string;
  age: number;
}

function print(user: IUser) {
  console.log(`I am ${user.name}, I'm ${user.age} years old!`);
}

const user: IUser = { name: "djd", age: 25 };

print(user);
```

### 类的接口

```ts
interface IUser {
  name: string;
  getName(): string;
}
class User implements IUser {
  public name: string;
  getName() {
    return this.name;
  }
}
```

### 接口继承

```ts
interface IPerson {
  getName(): string;
}

interface IAnimal {
  move(): void;
}

interface IUser extends IPerson, IAnimal {
  getId(): string;
}

class User implements IUser {
  private id: string;
  private name: string;
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  move() {}
}
```

### 接口中的可选属性

```ts
interface IUser {
  name: string;
  age: number;
  address?: string; // 这是个可选属性
}

function print(user: IUser) {
  console.log(`I am ${user.name}, I'm ${user.age} years old!`);

  if (user.address) {
    console.log(`My address is ${user.address}`);
  }
}

const user: IUser = { name: "djd", age: 25 }; // address 可以为 undefined

print(user);
```

### 只读属性

```ts
interface IUser {
  name: string;
  age: number;
  address?: string; // 这是个可选属性
  readonly mother?: string; // 只读属性
  readonly father?: string; // 只读属性
}

const user: IUser = { name: "djd", age: 25, mother: "123" };
user.age = 26;
user.mother = "456"; // Error
user.father = "567"; // Error
```

### 索引

```ts
interface IUser {
  [key: string]: string;
}

const u: IUser = {
  user: "djd",
  age: 18 // Error
};
```

## 支持两种类型索引

```ts
interface IData {
  [index: number]: any;
  [key: string]: string;
}

const u: IData = {
  user: "djd"
};

u[0] = 18;
console.log(u);

输出： { '0': 18, user: 'djd' }
```
