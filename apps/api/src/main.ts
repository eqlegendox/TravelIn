import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  var express = require('express')
  var cors = require('cors')
  var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOptions));
  await app.listen(process.env.PORT ?? 8000);
}
bootstrap();
