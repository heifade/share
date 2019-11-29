## 泛型

### 泛型函数
```ts
function toString<T>(val: T): string {
  return val.toString();
}
toString("a");
toString(1);
```

```ts
function getLength<T>(val: T[]): number {
  return val.length;
}
getLength([1, 2, 3]);
getLength(["a", "b", "c"]);
```


### 泛型类
```ts
class U<T> {
  private value: T;
  setValue(v: T) {
    this.value = v;
  }
  getValue() {
    return this.value;
  }
}

const u1 = new U<number>();
u1.setValue(1);

const u2 = new U<string>();
u2.setValue("a");
```

### 泛型约束
```ts
function getLength<T>(value: T) {
  return value.length; // Error 类型“T”上不存在属性“length” 
}
```

给泛型添加约束
```ts
interface A {
  length: number;
}

function getLength<T extends A>(value: T) {
  return value.length; // OK
}

getLength([1, 2, 3]); //OK
getLength("aaa"); // OK
getLength(true); // Error 类型“true”的参数不能赋给类型“A”的参数(因为没有 length 属性)
getLength({ length: 100 }); // OK (因为有 length 属性)
```