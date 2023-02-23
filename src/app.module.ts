import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeORMConfig } from './configs/typeorm.config';
import { BoardService } from './board/board.service';
import { BoardsController } from './boards/boards.controller';
import { BoardsModule } from './boards/boards.module';

@Module({
	imports: [MoviesModule, TypeOrmModule.forRoot(typeORMConfig), BoardsModule],
	controllers: [AppController, BoardsController],
	providers: [BoardService],
	// app.module은 AppController와 AppProvider만 가지고 있어야함
	// 그렇기 때문에 MoviesService와 MovivesController를 Movices.module로 옮겨야함
})
export class AppModule {}
