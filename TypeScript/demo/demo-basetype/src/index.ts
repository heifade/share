// enum Color {
//   red,
//   blue
// }

// function f(c: Color): number {
//   switch (c) {
//     case Color.red: {
//       return 1;
//     }
//   }
// }

// console.log(f(Color.blue));

// const a: void = void;

// console.log(a);

// function print(a: string): void {}

// console.log(print("a")); // undefined




// const a: any = 'abc';

// const b: number = a as number; // 断言 a 是 number
// console.log(typeof b); // string

// const c: number = Number(a); // 类型转换
// console.log(c); // NaN

const a: any = 1;
const b = a === 2 ? 1 : false; // 1 | false
