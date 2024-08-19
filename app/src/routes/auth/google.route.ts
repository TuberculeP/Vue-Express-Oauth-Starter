import { Router } from "express";
import passport from "passport";

const googleRouter = Router();
const { FRONTEND_URL } = process.env;

if (!FRONTEND_URL) {
  throw new Error("Please provide all the required environment variables");
}

googleRouter.get("/", passport.authenticate("google", { scope: ["profile"] }));

googleRouter.get(
  "/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect front-end home.
    res.redirect(FRONTEND_URL);
  }
);

export { googleRouter };
