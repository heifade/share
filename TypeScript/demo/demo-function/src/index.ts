function sum(v1: number, v2: number): number;
function sum(v1: number, v2: number, v3: number): number;
function sum(v1: number, v2: number, v3?: number, v4?: number): number;
function sum(v1: number, v2: number, v3?: number, v4?: number): number {
  return v1 + v2 + v3 || 0 + v4 || 0;
}

console.log(sum(1, 2));
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4));
