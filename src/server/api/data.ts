import { Application, Request, Response } from "express";
import { dataSource } from "../db/data-source";

export class Data {
  public api(app: Application) {
    app.route('/api/data').get((req: Request, res: Response) => {
      if (req.headers.authorization)
        res.status(200).json(dataSource);
      else
        res.status(401).json(['Nicht berechtigt.']);
    });
  }
}