import jwt from "jsonwebtoken";

export const protect = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer ")) {
    return res.status(401).json({ error: "Unauthorized: No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "ZoroInnovations"
    );
    req.user = decoded; // attaches { userId, email, name }
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token." });
  }
};
