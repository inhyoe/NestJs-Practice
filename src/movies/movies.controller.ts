import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	Req,
	Res,
} from '@nestjs/common';

import { MoviesService } from './movies.service';
import { Movie } from './entites/Movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/Update-movie.dto';

@Controller('movies') // entry point
export class MoviesController {
	constructor(private readonly moivesService: MoviesService) {} // moviesService에 접근하는 방법 == this
																					  // 지금 이 생성자를 사용할 수 있는 이유는 MoviesService라는 타입을 지정해줘서 가능
	@Get()
	getAll(@Req() req, @Res() res): Movie[] { // @req객체나 res객체를 직접적으로 사용하는건 옳지 않음
															// https://docs.nestjs.com/techniques/performance
		return this.moivesService.getAll();
	}

	@Get('/search')
	search(@Query('year') query: string) {
		console.log(query);
		// http://localhost:3000/movies/search?year=2000
		// return `We are searching fo a movie made after : ${query["year"]}`
		return `We are searching fo a movie made after : ${query}`;
	}

	@Get('/:id')
	getOne(@Param('id') id: number): Movie {
		return this.moivesService.getOne(id);
	}

	@Post()
	create(@Body() movieData: CreateMovieDto) {
		return this.moivesService.createMovie(movieData);
	}

	@Delete('/:id')
	deleteMovie(@Param('id') id: number) {
		return this.moivesService.deleteOne(id);
	}

	@Patch('/:movieId') //일부분의 리소스만 업데이트해줌
	patch(@Param('movieId') movieId: number, @Body() updateData: UpdateMovieDto) {
		return this.moivesService.update(movieId, updateData);
	}
}
