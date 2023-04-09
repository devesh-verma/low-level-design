import Database from "./Database";
import IDatabase from "./IDatabase";
import { user } from "./IUser";

class DatabaseProxy implements IDatabase {
  private database: Database;
  constructor() {
    this.database = new Database();
  }

  create(user: user): user {
    if (user.role === "ADMIN") {
      return this.database.create(user);
    }
    throw new Error("user does not have persmission");
  }

  read(userId: number): user {
    const user = this.database.read(userId);
    if (user.role === "ADMIN") {
      return this.database.read(user.id);
    }
    throw new Error("user does not have persmission");
  }

  delete(userId: number): number {
    const user = this.database.read(userId);
    if (user.role === "ADMIN") {
      return this.database.delete(userId);
    }
    throw new Error("user does not have persmission");
  }
}

export default DatabaseProxy;
