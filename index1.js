const express = require("express");
const app = express();


const BookStore = [
    {id:1,name:"Harry Potter", author:"DevFlux"},
    {id:2, name:"Friends", author: "Vikas"},
    {id:3 , name:"Nexus", author:"Rohit"},
    {id:4 , name:"DSA", author:"Maharaj"},
    {id:5, name:"Prem Kahani", author:"Rohan"}
]



// localhost:3000/book/3

app.get("/book", (req,res)=>{

    res.send(BookStore);
})


app.get("/book/:id",(req,res)=>{
  
    const id = parseInt(req.params.id)
    const Book = BookStore.find(info=>info.id===id);
   res.send(Book)
})






app.listen(3000,()=>{
    console.log("server 3000 starting...")
}
)
