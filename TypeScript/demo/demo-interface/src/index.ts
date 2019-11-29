interface IPerson {
  getName(): string;
}

interface IAnimal {
  move(): void;
}

interface IUser extends IPerson, IAnimal {
  getId(): string;
}

class User implements IUser {
  private id: string;
  private name: string;
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  move() {}
}
