const path = require("path")
//path module


console.log(path.sep);
const filePath = path.join("\console", "subfolder", "test.txt")
console.log(filePath);


const base = path.basename(filePath)
console.log(base);
const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt")
console.log(absolute);