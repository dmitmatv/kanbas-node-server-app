import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import UserRoutes from "./users/routes.js";
import "dotenv/config";
import session from "express-session";
import "dotenv/config";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

const app = express();
app.use(cors({
                 credentials: true,
                 origin: "https://assignment6--famous-kashata-3cb653.netlify.app",
             }
));
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}

app.use(
    session(sessionOptions)
);

app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
UserRoutes(app);

Hello(app);
Lab5(app);
app.listen(process.env.PORT || 4000);