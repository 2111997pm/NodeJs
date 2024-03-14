const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/myData", (req, res) => {
  res.send("mydata");
});

app.get("/login",(req,res)=>{
    res.send("<h1>Please enter Your log In iD </h1>")
})

app.get("/youtube",(req,res)=>{
  res.send("<h1>Please enter youtube  </h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
