import { Application, Request, Response } from "express";

export class Token {
  public index: number = 0;
  public token: string = 'MyToken';

  public api(app: Application) {
    app.route('/api/token').get((req: Request, res: Response) => {
      res.status(this.getStatusCode(this.getIndex())).json(this.token + Math.round((Math.random() * (900 - 100)) + 100) );
    });
  }

  public getIndex() {
    if (this.index < 3)
      this.index++;
    else
      this.index = 1  ;
    return this.index;
  }

  public getStatusCode(index: number): number {
    let statusCode: number;
    if (index == 3)
      statusCode = 401;
    else
      statusCode = 200;
    return statusCode;
  }
}
