const fs = require("fs");
//* fs.writeFileSync to create file
fs.writeFileSync("./output/app.log", "Application started");

//* fs.appendFileSync to write something on the file and this will remove the old text and add the new text
// const logEntry1 = `\n ${new Date().toISOString()}`;
// fs.appendFileSync("./output/app.log", logEntry1);
const logEntry2 = `\n ${new Date().toISOString()}`;
fs.appendFileSync("./output/app.log", logEntry2);

console.log("Task complete");
