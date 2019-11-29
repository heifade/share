class Person {
  name: string;
}

interface IUser extends Person {
  id: number;
}

const u: IUser = { id: 1, name: "djd" };
