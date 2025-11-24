// Todo create file
// Todo check if the file exits if exist show error
// Todo if doesn't exist create file
// Todo find the file by name
// Todo delete the file

const fs = require("fs");

//* create file asynchronously
fs.writeFileSync("./output/temp.txt", "this is temp file");
console.log("Temp file created");

// check if the file exist if exist delete the file
if (fs.existsSync("./output/temp.txt")) {
  console.log("file exist");
  fs.unlinkSync("./output/temp.txt");
  console.log("file deleted");
}
