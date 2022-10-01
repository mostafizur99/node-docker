import mongoose from "mongoose"
import logger from "./logger"

const connectDB = async () => {
    const database_uri = process.env.MONGODB_URI as string

    try {
        await mongoose.connect(database_uri)
        logger.info("Database Connected")
    } catch (e) {
        logger.error("Could not connect to database")
        process.exit(1)
    }
}

export default connectDB