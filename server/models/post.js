import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    liked:{
        type:String,
    }
    
})

export const Post = new mongoose.model("posts", schema)