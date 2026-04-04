const mongoose = require('mongoose');

 main()
 .then(() => {
    console.log("connected");
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userschema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const user = mongoose.model("user",userschema);

/*delete
user.deleteOne({name: "shreeja"}).then((res)=>{
    console.log(res);
}); 
user.findByIdAndDelete( "69c152f5edd9865c6a50430c").then((res)=>{
    console.log(res);
}); */ 


/* Update 
user.find({age: {$gt:20}})
.then((res) =>{
    console.log(res);
})
.catch((ree)=>{
    xonsole.log(err);
}); */ 


/* const user1 = new user({
    name: "shreeja",
    email: "shreeja11@gmail.com",
    age: 21,
});
user1.save(); */ 

/* user.insertMany([
    {name:"Ram", email:"ram@gmail.com", age:22},
    {name:"Rushi", email:"rushi@gmail.com", age:20},
    {name:"soam", email:"soam@gmail.com", age:21},
]).then((res) =>{
    console.log(res);
}); */

