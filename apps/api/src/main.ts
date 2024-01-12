import { Logger } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';

import expressListRoutes from 'express-list-routes';
import { createSwaggerDocument, getApp, globalPrefix } from '@app/bootstrap';

async function bootstrap() {
  const app = await getApp();

  const document = createSwaggerDocument(app);

  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );

  const server = app.getHttpServer();
  const router = server._events.request._router;

  expressListRoutes(router);
}

bootstrap();
