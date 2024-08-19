import dotenv from "dotenv";
dotenv.config({ path: [".env.local", ".env"] });
import "./config";
import express from "express";
import session from "express-session";
import { router } from "./routes";
import passport from "passport";
import cors from "cors";
import cookieParser from "cookie-parser";

const { PORT, SESSION_SECRET, DOMAIN, FRONTEND_URL } = process.env;

if (!PORT || !SESSION_SECRET || !DOMAIN || !FRONTEND_URL) {
  throw new Error("Please provide all the required environment variables");
}

const app = express();

app
  .use(cookieParser())
  .use(
    session({ secret: SESSION_SECRET, resave: false, saveUninitialized: false })
  )
  .use(express.json())
  .use(
    cors({
      origin: [`http://${DOMAIN}:${PORT}`, FRONTEND_URL],
      credentials: true,
      exposedHeaders: ["set-cookie"],
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .use(router);

app.listen(PORT, () => {
  console.log(`[server]: Server is running at http://${DOMAIN}:${PORT}`);
});
