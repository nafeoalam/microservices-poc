import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // Enable CORS

   // Swagger configuration
   const config = new DocumentBuilder()
   .setTitle('User API')
   .setDescription('API documentation for the user module')
   .setVersion('1.0')
   .addTag('users')
   .build();

 const document = SwaggerModule.createDocument(app, config);
 SwaggerModule.setup('api', app, document);

  await app.listen(3002);
}
bootstrap();
