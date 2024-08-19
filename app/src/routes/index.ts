import { authRouter } from "./auth";
import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  // get user from session
  const user = req.user;
  return res.json({ user });
});
router.use("/auth", authRouter);
export { router };
