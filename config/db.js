import mongoose from "mongoose"
import colors from "colors"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connect To Mongodb Database ${conn.connect.host}`.bgMagenta.white)
    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)
    }
}

export default connectDB