import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BoardsModule } from './boards/boards.module';
import { GoogleUserModule } from './google_user/google_user.module';
import { CreatePictureModule } from './create_picture/create_picture.module';

@Module({
	imports: [
		BoardsModule,
		MoviesModule,
		TypeOrmModule.forRoot(typeORMConfig),
		GoogleUserModule,
		CreatePictureModule,
	],
	controllers: [AppController],
	providers: [],
	// app.module은 AppController와 AppProvider만 가지고 있어야함
	// 그렇기 때문에 MoviesService와 MovivesController를 Movices.module로 옮겨야함
})
export class AppModule {}
