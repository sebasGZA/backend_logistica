import 'dotenv/config'
import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = parseInt(process.env.PORT ?? '3000');

  await app.listen(port, () => {
    Logger.log(`Server running on port ${port}`, 'main');
  });
}
bootstrap();
