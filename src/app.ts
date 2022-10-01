import express from "express";
import dotenv from 'dotenv'
import connectDB from "./utils/connect";
const app = express();
import logger from "./utils/logger"

dotenv.config()

app.listen(1337, () => {
    logger.info('App is running on port 1337')
    connectDB()
});

