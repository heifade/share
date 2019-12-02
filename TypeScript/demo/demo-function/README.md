## 函数


### 函数据完整式
```ts
let myAdd: (x: number, y: number) => number = function(
  x: number,
  y: number
): number {
  return x + y;
};
```

函数接口可以省略
```ts
let myAdd = function(x: number, y: number): number {
  return x + y;
};
```

直接申明函数
```ts
function myAdd(x: number, y: number): number {
  return x + y;
};
```

返回值可以根据函数体推断
```ts
function myAdd(x: number, y: number) {
  return x + y;
};
```

剪头函数
```ts
const myAdd = (x: number, y: number) => {
  return x + y;
};
```

剪头函数化简
```ts
const myAdd = (x: number, y: number) => x + y;
```


### 调用
```ts
function myAdd(x: number, y: number): number {
  return x + y;
}
myAdd(1, 2); // OK
myAdd(1); // Error
myAdd(1, 2, 3); // Error
myAdd(1, "b"); // Error
```

### 可选参数
```ts
function myAdd(x: number, y?: number): number {
  return x + y;
}
myAdd(1, 2); // OK
myAdd(1); // OK
myAdd(1, 2, 3); // Error
myAdd(1, "b"); // Error
```

### 参数默认值
```ts
function myAdd(x: number, y: number = 0): number {
  return x + y;
}
myAdd(1, 2); // OK
myAdd(1); // OK
myAdd(1, 2, 3); // Error
myAdd(1, "b"); // Error
```


### 剩余参数
```ts
function myAdd(x: number, ...other: number[]): number {
  let v = x;
  other.map(n => (v += n));
  return v;
}
myAdd(1); // OK
myAdd(1, 2); // OK
myAdd(1, 2, 3); // OK
```

### 方法重载
```ts
function sum(v1: number, v2: number): number;
function sum(v1: number, v2: number, v3: number): number;
function sum(v1: number, v2: number, v3?: number, v4?: number): number;
function sum(v1: number, v2: number, v3?: number, v4?: number): number {
  return v1 + v2 + v3 || 0 + v4 || 0;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
```