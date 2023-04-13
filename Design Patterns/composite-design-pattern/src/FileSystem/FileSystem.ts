import File from "./File";
import IFileSystem from "./IFileSystem";

class FileSystem implements IFileSystem{
    directoryName: string;
    fileSystemList: IFileSystem[];


    constructor(directoryName: string, fileSystemList: IFileSystem[]) {
        this.directoryName = directoryName;
        this.fileSystemList = fileSystemList;
    }

    ls(){
        console.log(this.directoryName);
        this.fileSystemList.forEach(fileOrDirectory => fileOrDirectory.ls());
    }
}
export  default FileSystem;