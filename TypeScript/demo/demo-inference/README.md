## 类型推论

根据字面量推导

```ts
let x = 0; // x 为 number 类型
x = "a"; // Error 不能将类型“"a"”分配给类型“number”
```

根据表达式结果推导

```ts
const x = 1 + 3; // number
```

根据三元表达式推导

```ts
const a: any = 1;
const b = a === 2 ? 1 : false; // 1 | false
```

根据函数返回值类型推导

```ts
const u = {
  value: 100
};

function getValue() {
  return u.value;
}

const v1 = getValue(); // v1 为 number 类型
v1 = "a"; // Error 不能将类型“"a"”分配给类型“number”
```
