console.log("Helllo world")

//talking abt backend or any code u wanna maintain in a long term
// we initialize it as an npm 

//commanda

// 1) npm init-->
// 2) package name: spotify
// 3 desc--> this is a spotify clone for my app
// 4) keywords-->spotify music


// now package.json is created 

//can install packages 
// npm install slugify/ npm i ( so that we can manage packages ) (we hv brought the code written in slugify package n now we can use it)
// a folder is created wid the name --> node modules--> holds all our packgs n dependencies

//if someone deletes the node modules thenn just enter npm install

var slugify = require('slugify')
let a= slugify('some string')
console.log(a);

const b= slugify('some &&&&string', '_'
)
    console.log(b)

    //slug is a url kinda text
    // so this code makes the str to a slug