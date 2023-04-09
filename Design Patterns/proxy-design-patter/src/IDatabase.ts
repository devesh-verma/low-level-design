import { user } from "./IUser";

interface IDatabase {
  create(user: user): object;
  read(userId: number): user;
  delete(userId: number): number;
}

export default IDatabase;
