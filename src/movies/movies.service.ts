import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entites/Movie.entity';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/Update-movie.dto';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie[] {
		return this.movies;
	}

	getOne(id: number): Movie {
		const movie = this.movies.find((movie) => movie.id === id); // 왜 string값을 internal값으로 바꿔주냐면 url에서 가져온 값은 무조건 string이기 때문이다
		if (!movie) {
			throw new NotFoundException(`Movie with ID ${id} not found`);
		}
		return movie;
	}

	deleteOne(id: number) {
		this.getOne(id); //? 원래 비즈니스 로직을 다시 재사용해서 사용하는 방법도 나쁘지 않은 것 같음.
		this.movies = this.movies.filter((movie) => movie.id !== id);
		console.log(this.movies);
	} //! this.movies를 다시 재정의해주지 않아서 에러가 발생했었음

	createMovie(movieData: CreateMovieDto) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData,
		});
		return this.movies;
	} //! return을 안해줘서 error가 발생했었음

	update(id: number, updateData: UpdateMovieDto) {
		const movie = this.getOne(id);
		console.log(movie);
		this.deleteOne(id);
		this.movies.push({ ...movie, ...updateData }); // 현재 이 기능에서는 validation을 검사하는 기능이 없음! 수정해야함
	}
}
