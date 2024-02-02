import { CommandRunner } from 'nest-commander';
import expressListRoutes from 'express-list-routes';
import { INestApplication } from '@nestjs/common';

export abstract class BaseRouteListCommand extends CommandRunner {
  abstract getApp(): Promise<INestApplication>;

  async run() {
    const app = await this.getApp();

    await app.listen(0);

    const server = app.getHttpServer();
    const router = server._events.request._router;

    expressListRoutes(router);

    await app.close();
  }
}
