import File from "./File";
import FileSystem from "./FileSystem";

console.log("File system")

const file1: File = new File("File1.txt");
const file2: File = new File("File2.txt");
const dir1: FileSystem = new FileSystem("Dir1", [file1, file2])
const file3: File = new File("File3.txt");
const dir2: FileSystem = new FileSystem("Dir2", [file3, dir1])

dir2.ls();