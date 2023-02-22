import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true,
			forbidNonWhitelisted: true, // stranger request를 차단할수 있음
			transform: true, // 유저가 보낸 것을 유저가 원하는 실제 타입으로 바꿔줌
		}),
	); //nest Js에서 제공하는 Pipeline Input값의 유효성을 검사해줌
	await app.listen(3000);
}
bootstrap();
