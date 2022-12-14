import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function ensureAuthenticateUser(request: Request, response: Response,
  next: NextFunction) {
    const authHeader = request.headers.authorization

    if (!authHeader) {
      return response.status(401).json({
        message: "Token missing"
      })
    }

    const [, token ] = authHeader.split(" ") 

    try {
      verify(token, "03d810e18c3bc6218e3a8afaf5b58c16") 
      
      return next()
    } catch (error) {
      return response.status(401).json({
        message: "Invalid token!"
      })
    }
}