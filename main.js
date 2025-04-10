const fs =require ("fs")
console.log(fs);

console.log("starting")
fs.writeFileSync("harry.txt","Harry is a good boy");
fs.writeFile("harry2.txt","harry is no tgood",()=>{
console.log("done")
fs.readFile("harry2.txt", (error, data)=>{
  console.log(error,data)
})
})

console.log("ending");
