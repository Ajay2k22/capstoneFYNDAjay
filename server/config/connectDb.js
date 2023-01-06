import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(`mongodb://127.0.0.1:27017/receipes`)
        console.log('Database connected sucessfully')
    }
    catch (error) {
        console.log(error)
    }
}

