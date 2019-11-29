## 交叉类型

```ts
class TypeA {
  name: string;
}

class TypeB {
  age: number;
}

const u: TypeA & TypeB = {
  name: "djd",
  age: 18
};
```

## 联合类型

```ts
let v: string | number | boolean;

v = 1; // OK
v = "a"; // OK
v = true; // OK
v = [1]; // Error
```

## 字符串字面量类型
```ts
let value: "First" | "Second";

value = "First"; // OK
value = "Second"; // OK
value = "Third"; // Error 不能将类型“"Third"”分配给类型“"First" | "Second"”
```

## 数字字面量类型
```ts
let value: 1 | 2;

value = 1; // OK
value = 2; // OK
value = 3; // Error 不能将类型“3”分配给类型“1 | 2”

```