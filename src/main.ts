// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Habilitar CORS para permitir requisições do frontend
  app.enableCors({
    origin: 'http://localhost:3000', // URL do seu frontend Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Pipes de validação globais
  app.useGlobalPipes(new ValidationPipe());

  // Servir arquivos estáticos da pasta uploads
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/uploads/', // acessível via http://localhost:3001/uploads/...
  });

  const PORT = process.env.PORT || 3001;
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
