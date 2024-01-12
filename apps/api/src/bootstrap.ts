import { NestFactory } from '@nestjs/core';
import { AppModule } from '@app/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export const globalPrefix = 'api';

export const createSwaggerDocument = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('Unnamed Restaurant')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('unnamed-restaurant')
    .addBearerAuth()
    .build();

  return SwaggerModule.createDocument(app, config);
};

export const getApp = async () => {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(globalPrefix);
  return app;
};
