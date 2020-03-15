export class User {
  public id: number;
  public email: string;
  public firstName: string;
  lastName: string;
  avatar: string;

  constructor(id: number, email: string, firstName: string, lastName: string, avatar: string) {
    this.id = id;
    this.email = email;
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
  }
}
