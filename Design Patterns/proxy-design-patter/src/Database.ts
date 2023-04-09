import IDatabase from "./IDatabase";
import { user } from "./IUser";

class Database implements IDatabase {
  private static MemoryDB: Map<number, user>;
  constructor() {
    Database.MemoryDB = new Map();
  }
  create(user: user): user {
    Database.MemoryDB.set(user.id, user);
    console.log("User created");
    return user;
  }

  read(userId: number): user {
    const user: user | undefined = Database.MemoryDB.get(userId);
    if (!user) {
      console.log("User not found: ");
      throw new Error("User not found");
    }
    console.log("User found");
    return user;
  }

  delete(userId: number): number {
    const user: boolean = Database.MemoryDB.delete(userId);
    if (!user) {
      console.log("User not found");
    }
    console.log("User deleted");
    return userId;
  }
}

export default Database;
