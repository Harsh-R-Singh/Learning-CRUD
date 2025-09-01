const mongoose=require('mongoose')
try {
    mongoose.connect("mongodb+srv://harshrajsingh_db_user:Hararu@cluster1.1hm3tfq.mongodb.net/");
    console.log("connected");
    
} catch (error) {
    console.log(error);
    
}

const userSchema=mongoose.Schema({
    email: String,
    name: String,
    image: String,
})
module.exports= mongoose.model("user",userSchema);