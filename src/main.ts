import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const logger = new Logger('Bootstrap');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get<number>('app.port', 3000);
  await app.listen(port);

  try {
    const url = await app.getUrl();
    logger.log(`Application is running on: ${url}`);
  } catch {
    logger.log(`Application is running on port: ${port}`);
  }
}

bootstrap().catch((err) => {
  logger.error('Bootstrap failed', err as Error);
  process.exit(1);
});
