"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DatabaseProxy_1 = __importDefault(require("./DatabaseProxy"));
const databaseProxy = new DatabaseProxy_1.default();
const user1 = {
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
