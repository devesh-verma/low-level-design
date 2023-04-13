import IFileSystem from "./IFileSystem";

class File implements IFileSystem {
    file: string;

    constructor(file: string) {
        this.file = file;
    }

    ls() {
        console.log("File: ", this.file);
    }
}

export default File;
