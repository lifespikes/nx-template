import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication, Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import process from 'process';

export const globalPrefix = 'api';

export const createSwaggerDocument = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('janus')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('janus')
    .addBearerAuth()
    .build();

  return SwaggerModule.createDocument(app, config);
};

export const getApp = async (Module: any) => {
  /**
   * Initialize the NestJS application
   */
  const app = await NestFactory.create(Module);
  app.setGlobalPrefix(globalPrefix);

  return app;
};

export const bootstrap = async (Module: any) => {
  const app = await getApp(Module);

  const document = createSwaggerDocument(app);

  SwaggerModule.setup(`${globalPrefix}/docs`, app, document);

  // @ts-ignore
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`,
  );
};
