const http = require("http");
const express = require("express");

const app =  express();
app.get('/', (req, res) => {
    return res.send("Hello Home Page")
})
app.get('/about', (req, res) => {
    return res.send("Hello about Page" + ' hey ' + req.query.name + ' You are ' + req.query.age);
})

app.listen(8000, () => {"Server Started"})

// const myServer  = http.createServer(app);
// myServer.listen(8000, () => console.log("Server Started"));