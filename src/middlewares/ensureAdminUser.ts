import { Request, Response, NextFunction } from "express";

export function ensureAdminUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const admin = true;

  if (admin) {
    return next();
  }

  return response.status(401).json({
    error: "Unauthorized",
  });
}
