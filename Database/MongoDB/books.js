const mongoose = require('mongoose');

 main()
 .then(() => {
    console.log("connected");
 })
 .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type: Number,
        default: 0
    }
});

const book = mongoose.model("book",bookSchema);

let book1 = new book({
    title: "Deep Work",
    price: 299,
});
book1
.save()
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
});
