const fs = require('fs');
//sychronous call

// fs.writeFileSync("./test.txt","hello world ")

// Async
// fs.writeFileSync("./test.txt","hello world asyn", (err)=>{});

// const result = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(result)

// fs.readFile("./contacts.txt", "utf-8",(err, res)=>{
//     if (err){
//         console.log("Error", err);
//     }
//     else{
//         console.log(res);
//     }
//     }
// );
fs.appendFileSync("./test.txt", new Date().getDate().toLocaleString());
fs.appendFileSync("./test.txt", `${Date.now()} hey there\n`);
fs.cpSync('./test.txt','./copy.txt');
fs.unlinkSync("./copy.txt");//delete 

console.log(fs.statSync("./test.txt")); //gets the statistics
console.log(fs.statSync("./test.txt").isFile());

// fs.mkdirSync('node_2')//creates a directory

fs.mkdirSync('mydocs1/a/b',{recursive:true});