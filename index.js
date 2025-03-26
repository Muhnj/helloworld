//1)Dependencies
const express = require('express');
const path = require("path");



//2)Intitations
const app = express();


//Import the routes
const studyRoutes = require("./routes/studyRoutes")

//3)Configurations



//4)middle ware
app.use(express.urlencoded({extended:true}));//this helps to move date
app.use(express.static(path.join(__dirname, "public")))//specifies a folder for static files

//This  middle ware is for the whole project
app.use('/about', (req, res, next) => {
    console.log('A new request received at ' + Date.now());
    next();
});

//This  middle ware is for the whole project
app.use((req, res, next)=> {
    console.log("A new request receiving" + Date.now());
    next();

});


//Routings
app.use("/", studyRoutes)





//redirection to unavailable page
app.get('*',(req, res)=> {
    res.send('oops! page not found');
});

//Bootstrapping Server
app.listen(3000, () => console.log('listening on port 3000')); // This is the last line always in the  server file.

















// // // Import the 'http' module
// // const http = require('http');
// // // Create the server using the 'http.createServer()' method
// // const server = http.createServer((req, res) => {
// // // The server's response configuration starts here
// // // Set the response header with a status code of 200 (OK)
// // // and a content type of 'text/plain'
// // res.writeHead(200, { 'Content-Type': 'text/plain' });
// // // Send the response body with the text 'Hello, Node.js Server!'
// // res.end('Hello, Node.js Server!');
// // // The server's response configuration ends here
// // });
// // // Define the port number the server will listen on
// // const PORT = 3000;
// // // Start the server and listen on the specified port
// // server.listen(PORT, () => {
// // console.log(`Server is running on port ${PORT}`);
// // });


// console.log('Helle node is running !');

