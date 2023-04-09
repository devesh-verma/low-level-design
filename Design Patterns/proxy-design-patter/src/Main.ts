import DatabaseProxy from "./DatabaseProxy";
import { user } from "./IUser";

const databaseProxy: DatabaseProxy = new DatabaseProxy();

const user1: user = {
  id: 1,
  name: "Devesh",
  role: "ADMIN",
};
console.log("------create------");
const createdUser = databaseProxy.create(user1);
console.log(createdUser);
console.log("------read------");
const fetchedUser = databaseProxy.read(user1.id);
console.log(fetchedUser);
console.log("------delete------");
const deletedUser = databaseProxy.delete(user1.id);
console.log(deletedUser);
