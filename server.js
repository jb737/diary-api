import express from "express";
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import postRoutes from "./routes/posts.js";

//50:40 in youtube video

dotenv.config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

app.use('/api/posts', postRoutes);

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true);

        mongoose.connect(process.env.MONGO_URI, {
            //useNewUrlParser: true,
            //useUnifiedTopology: true
        });

        console.log("MongoDB is connected...")
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

connectDB().then(() => {
    app.listen(port, () => console.log(`Listening on Port ${port}`));
}).catch(err => console.log(err));



