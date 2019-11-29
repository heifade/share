## 模块

sum.ts 文件内容

```ts
export function sum(a: number, b: number): number {
  return a + b;
}
```

index.ts 文件内容

```ts
import { sum } from "./sum";
console.log(sum(1, 2));
```
