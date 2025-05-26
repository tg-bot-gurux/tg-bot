import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Bot example')
    .setDescription('The bot API description')
    .setVersion('1.0')
    .addTag('bots')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('', app, documentFactory);

  const port = process.env.APP_PORT ? parseInt(process.env.APP_PORT) : 4000

  await app.listen(port, () => {
    console.log(`Server running on port ${port} ✅`)
  });
}
bootstrap();
