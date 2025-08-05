// const fs = require('node:fs');
const http = require('http');
// fs.writeFile("hey.txt", "Hello",function(err) {
//     if (err) {
//         console.error("Error writing file:", err);
//     } else {
//         console.log("File written successfully");
//     }
// });
// fs.appendFile("hey.txt", " World", function(err) {
//     if (err) {
//         console.error("Error appending to file:", err);
//     } else {
//         console.log("File appended successfully");
//     }
// });
// fs.rename("hey.txt", "newHey.txt", function(err) {
//     if (err) {
//         console.error("Error renaming file:", err);
//     } else {
//         console.log("File renamed successfully");
//     }
// });
// fs.readFile("newHey.txt", "utf-8", function(err, data) {
//     if (err) {
//         console.error("Error reading file:", err);
//     } else {
//         console.log("File content:", data);
//     }
// });
const server = http.createServer(function(req, res) {
    res.end("Hello World"); 
    })
    server.listen(3000, function() {
    console.log("Server is running on port 3000");
    });