import express from "express";
const app = express();
import logger from "./utils/logger"

app.listen(1337, () => {
    logger.info('App is running on port 1337')
});

