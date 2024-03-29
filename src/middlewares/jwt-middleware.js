import jwt from "jsonwebtoken";

const TOKEN_SECRET = "noteApp";

export const verifyToken = async (req, res, next) => {
  let token = false;
  try {
    token = req.header("auth-token");
  } catch (error) {
    console.log(error);
  }
  if (!token) {
    return res.status(401).json({ error: "unauthorized" });
  }
  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(401).json({ error: "Token is not valid." });
  }
};
