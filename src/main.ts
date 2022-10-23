import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidateInputPipe } from './core/pipes/validate.pipe';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix("api/v1");
  //app.useGlobalFilters(new ValidateInputPipe({whitelist: true}));
  await app.listen(3000);
}
bootstrap();
