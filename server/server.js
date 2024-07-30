import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/users.js";
import bookingsRoute from "./routes/bookings.js";
import cookieParser from "cookie-parser"
import cors from 'cors'
// import auth from './middleware/auth.js'

const app = express()
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB!")
    } catch (error) {
        throw error;
    }
};

connect();

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected")
})

// middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());

// MongoDB Atlas Connection



// Routes
app.use("/api/authentication", authRoute);
app.use("/api/users", userRoute);
app.use("/api/bookings", bookingsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Oops! Something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
});

app.listen(8000, () => {
    connect()
    console.log("connected to backend!")
})