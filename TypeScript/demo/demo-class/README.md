## 类

```ts
class User {
  private id: number;
  private name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
```

### 继承

```ts
class Person {
  private id: number;
  constructor(id: number) {
    this.id = id;
  }
  getId() {
    return this.id;
  }
}

class User extends Person {
  private name: string;
  constructor(id: number, name: string) {
    super(id);
    this.name = name;
  }

  getName() {
    return this.name;
  }
}
```

### 修饰符

```ts
class User {
  private id: number; // 私有
  public name: string; // 公有
  address: string; // 公有
  protected age: number; // 保护 在派生类中可以访问
  private readonly rid: number; // 私有 只读
  public readonly rname: string; // 公有 只读
  protected readonly rage: number; // 保护 只读
  readonly raddress: string; // 公有 只读
}
```

### 存取器

```ts
class User {
  private _name: string;
  get name(): string {
    return this._name;
  }
  set name(name: string) {
    this._name = name;
  }
}

const u: User = new User();
u.name = "djd";
console.log(u.name);
```

### 静态方法

```ts
class Utils {
  static sum(v1: number, v2: number) {
    return v1 + v2;
  }
}
console.log(Utils.sum(1, 2));
```

### 抽象类

```ts
abstract class Person {
  abstract print(): void;
}

class User extends Person {
  print() {
    console.log("user");
  }
}
```

### 把类当接口使用

```ts
class Person {
  name: string;
}

interface IUser extends Person {
  id: number;
}

const u: IUser = { id: 1, name: "djd" };
```
