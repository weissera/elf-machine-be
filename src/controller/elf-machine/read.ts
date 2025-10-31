import { Request, Response } from 'express';

export const getAllUser = (req: Request, res: Response) => {
  const { id } = req.params;

  res.json({ message: `User ${id} gefunden` });
};
