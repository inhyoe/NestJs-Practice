import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { clearConfigCache } from 'prettier';
import { MoviesService } from './movies.service';
import { Movie } from './entites/Movie.entity';

@Controller('movies') // entry point
export class MoviesController {
	constructor(private readonly moivesService: MoviesService) {} // moviesService에 접근하는 방법 == this

	@Get()
	getAll(): Movie[] {
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
	getOne(@Param('id') id: string): Movie {
		return this.moivesService.getOne(id);
	}

	@Post()
	create(@Body() movieData) {
		return this.moivesService.createMovie(movieData);
	}

	@Delete('/:id')
	deleteMovie(@Param('id') id: string) {
		return this.moivesService.deleteOne(id);
	}

	// @Patch('/:movieId') //일부분의 리소스만 업데이트해줌
	// patch(@Param('movieId') movieId: String, @Body() updateData) {
	// 	return {
	// 		updateData: movieId,
	// 		...updateData,
	// 	};
	// }
	@Patch('/:movieId') //일부분의 리소스만 업데이트해줌
	patch(@Param('movieId') movieId: string, @Body() updateData) {
		return this.moivesService.update(movieId, updateData);
	}
}
