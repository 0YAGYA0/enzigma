import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import {apiError} from "./utils/apiError"

const app=express()

app.use(express.json())
app.use(cors());
app.use(cookieParser())

app.use((err, req, res, next) => {
    if (err instanceof apiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors
        });
    }

    console.error(err); // Log the error for debugging purposes
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    });
});

export {app}