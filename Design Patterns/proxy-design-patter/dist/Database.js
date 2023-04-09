"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        Database.MemoryDB = new Map();
    }
    create(user) {
        Database.MemoryDB.set(user.id, user);
        console.log("User created");
        return user;
    }
    read(userId) {
        const user = Database.MemoryDB.get(userId);
        if (!user) {
            console.log("User not found: ");
            throw new Error("User not found");
        }
        console.log("User found");
        return user;
    }
    delete(userId) {
        const user = Database.MemoryDB.delete(userId);
        if (!user) {
            console.log("User not found");
        }
        console.log("User deleted");
        return userId;
    }
}
exports.default = Database;
