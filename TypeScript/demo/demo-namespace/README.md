## 命名空间

导出
```ts
export namespace NMath {
  export function sum(v1: number, v2: number) {
    return v1 + v2;
  }
}
```

导入
```ts
import { NMath } from "./sum";
const sum = NMath.sum;
console.log(sum(2, 2));
```
