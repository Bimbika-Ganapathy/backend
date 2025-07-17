const http = require('http');
const fs=require('fs');
const url=require('url');

const myServer=http.createServer((req,res)=>{
    if (req.url==="/favicon.ico") return res.end();
    const log=`${Date.now()}:${req.method} ${req.url}:New Req Received\n`;
    const myUrl=url.parse(req.url, true);   
 
     fs.appendFile('log.txt',log, (error,data)=>{
    switch(myUrl.pathname){
        case '/':  res.end("HomePage");
        break;
        case '/about':
            const username=myUrl.query.myname;
            res.end(`Hi, ${username}`);
        break;
        case '/search': 
            const search=myUrl.query.search_query;
            res.end("Hi here are the results for ur search "+ search);

        case '/signup':
            if (req.method==="GET") res.end("this is a signup form")
            else if (req.method==="POST") {res.end("success");}
        default: res.end("404 not found ");


      
    };
    
 

    });
});

myServer.listen(8000,()=>console.log("Srever started "));
