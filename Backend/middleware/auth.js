import { verify } from "jsonwebtoken";
import User from "../models/user.model.js";

export default async function (req, res, next) {
  try {
    const authHeader = req.header("Authorization");
    if (!authHeader) return res.status(401).json({ error: "No token" });

    const token = authHeader.replace("Bearer ", "");
    const payload = verify(token, process.env.JWT_SECRET);
    const user = await User.findById(payload.id).select("-password");
    if (!user) return res.status(401).json({ error: "Invalid token" });

    req.user = user;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Unauthorized" });
  }
}
