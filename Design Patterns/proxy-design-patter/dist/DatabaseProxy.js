"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("./Database"));
class DatabaseProxy {
    constructor() {
        this.database = new Database_1.default();
    }
    create(user) {
        if (user.role === "ADMIN") {
            return this.database.create(user);
        }
        throw new Error("user does not have persmission");
    }
    read(userId) {
        const user = this.database.read(userId);
        if (user.role === "ADMIN") {
            return this.database.read(user.id);
        }
        throw new Error("user does not have persmission");
    }
    delete(userId) {
        const user = this.database.read(userId);
        if (user.role === "ADMIN") {
            return this.database.delete(userId);
        }
        throw new Error("user does not have persmission");
    }
}
exports.default = DatabaseProxy;
