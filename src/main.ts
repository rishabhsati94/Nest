import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,       // remove unwawnted parameter  from request
    forbidNonWhitelisted: true,     // throw error is if see unwawnted parameter
    transform: true,  //  conversion of primitive types
    transformOptions: {
      enableImplicitConversion: true
    }

  }))
  await app.listen(3000);
}
bootstrap();
