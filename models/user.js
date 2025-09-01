const mongoose=require('mongoose')
try {
    mongoose.connect("");
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
