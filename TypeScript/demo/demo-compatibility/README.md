## 类型兼容性

_TypeScript 里的类型兼容性是基于结构子类型的。 结构类型是一种只使用其成员来描述类型的方式。_

### 例 1

```ts
class User1 {
  name: string;
}

class User2 {
  name: string;
}

const u: User1 = new User2(); // OK
```

### 例 2

```ts
class User1 {
  name: string;
}

class User2 {
  name: string;
  value: number;
}

const u: User1 = new User2(); // OK
```

### 例 3

```ts
class User1 {
  name: string;
  value: number;
}

class User2 {
  name: string;
}

const u: User1 = new User2(); // Error Property 'value' is missing in type 'User2' but required in type 'User1'
```


### 例 4
```ts
class User1 {
  name: string;
  value: number;
}

class User2 {
  name: string;
}

const u1: User1 = { name: "djd", value: 1 }; // OK
const u2: User1 = { name: "djd" }; // Error Property 'value' is missing in type '{ name: string; }' but required in type
const u3: User1 = { name: "djd", value: 1, id: 5 }; // Error 不能将类型“{ name: string; value: number; id: number; }”分配给类型“User1”。对象文字可以只指定已知属性，并且“id”不在类型“User1”中

const vv = { name: "djd", value: 1, id: 5 };
const u4: User2 = vv; // OK 比较上一条(u3)

```

