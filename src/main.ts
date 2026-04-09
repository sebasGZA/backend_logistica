import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { AppModule } from './app.module';
import { swaggerConfiguration } from './swagger/config/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT ?? '3000');
  const prefix = process.env.API_PREFIX ?? 'api'

  swaggerConfiguration(app);
  app.setGlobalPrefix(prefix);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));

  await app.listen(port, () => {
    Logger.log(`Server running on port ${port}`, 'main');
  });
}
bootstrap();
