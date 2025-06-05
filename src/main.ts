// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  // Habilitar CORS para permitir requisições do frontend
  app.enableCors({
    origin: 'http://localhost:3000', // URL do seu frontend Next.js
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Altere a porta para uma diferente da do Next.js
  const PORT = process.env.PORT || 3001; // Sugestão: 3001 ou 3333
  await app.listen(PORT);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();