const fs = require("fs");
const path = require("path");

console.log("current directiory name:", __dirname);
console.log("current file path:", __filename);

console.log("\n" + ".".repeat(50) + "\n");

const file = "./output/newFolder/app.log";

console.log("analyze file", file, "\n");
console.log("Folder name of the file", path.dirname(file), "\n");
console.log("File Name", path.basename(file), "\n");
console.log("file extension :", path.extname(file));

// * parse help you to get every thing we have learnd previously you will get file (name, dir, pathname, extesion, root dir). parse provide you an object{ root, dir, base, ext, name}
console.log("parse path : ", path.parse(file));

//* format the parse object into path
console.log("Fromat the parse", path.format(path.parse(file)));
