export class User {
  private userId: string;
  private userName: string;
  constructor(id: string, name: string) {
    this.userId = id;
    this.userName = name;
  }

  getId() {
    return this.userId;
  }
  getName() {
    return this.userName;
  }

  toString() {
    return `${this.userId}: ${this.userName}`;
  }
}
