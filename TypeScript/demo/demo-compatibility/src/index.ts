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
