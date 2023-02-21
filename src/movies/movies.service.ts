import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entites/Movie.entity';

@Injectable()
export class MoviesService {
	private movies: Movie[] = [];

	getAll(): Movie[] {
		return this.movies;
	}

	getOne(id: string): Movie {
		const movie = this.movies.find((movie) => movie.id === +id);
		if (!movie) {
			throw new NotFoundException(`Movie with ID ${id} not found`);
		}
		return movie;
	}

	// deleteOne(id: string) {
	// 	this.getOne(id); // 이 함수를 먼저 호출하기 때문에 값이 없어도 됨
	// 	console.log(this.movies.filter((movie) => movie.id !== +id));

	// 	this.movies.filter((movie) => movie.id !== +id);
	// 	console.log(this.movies);
	// 	// this.movies.filter((movie) => movie.id === +id);
	// 	// return true;
	// }
	deleteOne(id: string) {
		this.getOne(id);
		this.movies = this.movies.filter((movie) => movie.id !== +id);
		console.log(this.movies);
	}

	createMovie(movieData) {
		this.movies.push({
			id: this.movies.length + 1,
			...movieData,
		});
		return this.movies;
	}

	update(id: string, updateData) {
		const movie = this.getOne(id);
		console.log(movie);
		this.deleteOne(id);
		this.movies.push({ ...movie, ...updateData });
	}
}
