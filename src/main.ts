import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.enableCors();

  const port: number = parseInt(process.env.PORT, 10) || 3000;

  await app.listen(port);
}
bootstrap();
