const fs = require("fs");// File System Module
/*
fs.readFile("A.txt", "utf8", function (err, data) {
console.log(data);
})
console.log("Reading File...");
*/
//Promises
function monilReadFile(){
    return new Promise((function(resolve){
     fs.readFile("a.txt", "utf-8", function (err, data) {
               resolve(data);
        });
    })
)};

function ondone(data){
    console.log(data);
}
monilReadFile().then(ondone);
//Async Await
function monilReadFile(){
    return new Promise((function(resolve){
     fs.readFile("a.txt", "utf-8", function (err, data) {
               resolve(data);
        });
    })
)}
async function main(){
    const data = await monilReadFile();
    console.log(data);
}