import { Command } from 'nestjs-command';
import { Injectable } from '@nestjs/common';
import { getApp } from '@app/bootstrap';
import expressListRoutes from 'express-list-routes';

@Injectable()
export class RouteListCommand {
  constructor() {}

  @Command({
    command: 'route:list',
    describe: 'Get the routes registered in the application',
  })
  async create() {
    const app = await getApp();

    await app.listen(0);

    const server = app.getHttpServer();
    const router = server._events.request._router;

    expressListRoutes(router);

    await app.close();
  }
}
