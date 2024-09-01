import MyJwtPayload from "@/app/api/user/types/jwtPayload";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "";

export function verifyToken(token: string) {
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return { valid: true, payload: (payload as MyJwtPayload) };
} catch (error) {
    return { valid: false, error: "Invalid or expired token" };
  }
}
