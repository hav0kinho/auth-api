import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe()); // Permite a utilização do class-validator e etc, ValidationPipes como ParseIntPipe e etc.
  await app.listen(3000);
}
bootstrap();
