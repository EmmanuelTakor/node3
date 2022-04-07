const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hey Welcome!");
});
app.get('/welcome',(req,res)=>{
res.send('Hey Welcome to my API first application')
})
app.get("/welcome/:id", (req, res) => {
    const id = req.params.id
  res.send("Hey " + id + ". Thanks for calling a parameterized route in my API first application");
});
app.listen(5000,(reply)=>{
    console.log('connected')
})