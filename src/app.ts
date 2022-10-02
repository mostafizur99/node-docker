import express from "express";
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from "./utils/connect";
import logger from "./utils/logger"
import productsRoute from "./routes/products.route";

dotenv.config()
const app = express();
app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(1337, () => {
    logger.info('App is running on port 1337')
    connectDB()

    productsRoute(app)
});

