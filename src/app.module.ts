import { Module } from '@nestjs/common';
import { MoviesModule } from './movies/movies.module';
import { AppController } from './app/app.controller';

@Module({
  imports: [MoviesModule],
  controllers: [AppController],
  providers: [],
  // app.module은 AppController와 AppProvider만 가지고 있어야함
  // 그렇기 때문에 MoviesService와 MovivesController를 Movices.module로 옮겨야함
})
export class AppModule {}
