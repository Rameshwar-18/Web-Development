const express = require("express");
const app = express();
const port = 8080;
const path = require("path");

const{ v4 : uuidv4 } = require('uuid'); //uuid declare 

const methodOverride = require("method-override"); // override declare
app.use(methodOverride("_method"));
 

app.use(express.urlencoded({extended: true}));

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.use(express.static (path.join(__dirname,"public")));

let posts = [
    {
        id: uuidv4(), //uuid used 
        username : "rameshwar",
        content : "chutney pagalu"
    },
    {
        id: uuidv4(),
        username : "soham",
        content : "chiken pagalu"
    },
    {
        id: uuidv4(),
        username : "rushi",
        content : "dairy milk bubbly pagalu"
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs", { posts: posts });
});

app.listen(port,() =>{
    console.log("listening to port : 8080");
});


/*implement POST*/
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req, res)=>{
    let{username, content} = req.body;
    let newId = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts");
});


//implement GET //
app.get("/posts/:id",(req, res)=>{
    let{id} = req.params;
    let post = posts.find((p)=> id ===p.id);
    res.render("show.ejs",{post});
});


//implement PATCH // 
app.patch("/post/:id",(req,res)=>{
    let{id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p)=> id ===p.id);
    post.content = newContent;
    console.log(post);
    res.send("patch request working");
});


//implement UPDATE//
app.get("/posts/:id/edit",(req,res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id == p.id);
    res.render("edit.ejs",{post});
});



//implement DELETE//
app.delete("/posts/:id",(req,res)=>{
    let{id}= req.params;
    posts = posts.filter((p)=> id!==p.id);
    res.redirect("/posts");
});