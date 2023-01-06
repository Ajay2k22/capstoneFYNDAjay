import express from "express";
import { ErrorHandler } from "./middleware/error.js";
import { connectDB } from "./config/connectDB.js";
import productrouter from "./routes/product.js";
import userrouter from "./routes/user.js";
import postrouter from "./routes/post.js";
import ingredientrouter from "./routes/ingredients.js";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(productrouter)
app.use(userrouter)
app.use(ingredientrouter)
app.use(postrouter)

app.use(express.json())

connectDB();



app.listen(5000, () => {
    console.log(`Connected Successfully http://localhost:5000/`)
})
// app.use((msg, req, res, next) => {
//     console.log(msg.message)
//     next()
// })

app.use(ErrorHandler)