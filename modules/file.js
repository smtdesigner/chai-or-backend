const { log } = require("console");
const fs = require("fs");

// sync 
// fs.writeFileSync('./test.txt', "Hello world");

// Async 
// fs.writeFile('./test.txt', "Hello world Async", (err) => {});

// const result = fs.readFile("./contects.txt", "utf-8")

// console.log(result);

// fs.readFile('./contects.txt', "utf-8", (err, result) => {
//     if (err){
//         console.log("error", err);
//     } else{
//         console.log(result);
//     }
// })

// fs.appendFileSync('./contects.txt', `${Date.now()}hey there priya\n`);
// fs.cpSync('./contects.txt', "./copy.txt");
// fs.unlinkSync("./copy.txt");

// console.log(fs.statSync('./contects.txt'));
fs.mkdirSync("my-docs")