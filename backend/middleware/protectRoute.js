import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

  const protectRoute = async (req, res, next) => {

  console.log("========== PROTECT ROUTE ==========");
  console.log("Cookies:", req.cookies);
  console.log("JWT:", req.cookies.jwt);
  
  try {
    
    const token = req.cookies.jwt;

    console.log("Token:", token);

    if (!token) {
      return res.status(401).json({
        error: "Unauthorised : NO TOKEN PROVIDED",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unathorised : Invalid Token" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(401).json({ error: "User Not Found" });
    }

    req.user = user;

    next();
  } catch (err) {
    console.log(err.message);
  }
};

export default protectRoute;
