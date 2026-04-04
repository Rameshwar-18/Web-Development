const mongoose = require("mongoose");
const Chat = require("./models/chat.js");



main().then(()=>
     {console.log("connection success");
})
.catch((err)=> console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChat = [
    {
    from: "Riya",
    to: "Aditi",
    message: "hello Aditi",
    created_at: new Date(),
    },

    {
    from: "Dushman",
    to: "Rameshwar",
    message: "wet n joyy la jycha ka ?",
    created_at: new Date(),
    },

    {
    from: "soii",
    to: "sheru",
    message: "MP cha aj karycha ahe",
    created_at: new Date(),
    },

    {
    from: "Rudra",
    to: "Nidhi",
    message: "Aj ky order kela",
    created_at: new Date(),
    },
]

 Chat.insertMany(allChat);
