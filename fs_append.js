const { error } = require("console");
const fs = require("fs");
//* fs.writeFileSync to create file
fs.writeFileSync("./output/app.log", "Application started");

//* fs.appendFileSync to write something on the file
const logEntry1 = `\n ${new Date().toISOString()}`;
fs.appendFileSync("./output/app.log", logEntry1);
const logEntry2 = `\n ${new Date().toISOString()}`;
fs.appendFileSync("./output/app.log", logEntry2);

console.log("Task complete");

console.log("Start reading");
//* read file with blocking_IO
const ReadFile = fs.readFileSync("./output/app.log", "utf-8");
//* read file with non_blocking_IO
const ReadFile2 = fs.readFile("./output/app.log", "utf-8", (error, data) => {
  if (error) throw error;
  console.log(data);
});

console.log(ReadFile);
console.log(ReadFile2);

console.log(process.platform);
console.log(process.version);
