const fs=require("fs");

let text=fs.readFileSync("delete.txt","utf-8");
text=text.replace("content","me");


console.log("The content is: ");
console.log(text);

console.log("Creating a new file....")
fs.writeFileSync("rohan.txt",text);
