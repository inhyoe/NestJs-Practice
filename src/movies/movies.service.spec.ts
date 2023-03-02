import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';
import { NotFoundException } from '@nestjs/common';

describe('MoviesService', () => {
	let service: MoviesService;

	beforeEach(async () => {
		const module: TestingModule = await Test.createTestingModule({
			providers: [MoviesService],
		}).compile();

		service = module.get<MoviesService>(MoviesService);
	});

	it('should be defined', () => {
		expect(service).toBeDefined();
	});

	it('should be 4', () => {
		expect(2 + 2).toEqual(4);
	}); //test code

	describe('getAll', () => {
		// Unit Test
		it('should return an array', () => {
			const result = service.getAll();

			expect(result).toBeInstanceOf(Array);
		});
	});

	describe('getOne', () => {
		it('should return a moive', () => {
			service.createMovie({
				// 먼저 createMoive로 Movie 객체를 생성해줘야함.
				title: 'Test Movie',
				geners: ['test'],
				year: 2000,
			});
			const movie = service.getOne(1);
			expect(movie).toBeDefined();
			expect(movie.id).toEqual(1);
		});
		it('Should throw 404 error', () => {
			try {
				service.getOne(999);
			} catch (e) {
				expect(e).toBeInstanceOf(NotFoundException);
				expect(e.message).toEqual(`Movie with ID 999 not found`);
			}
		});
	});
	describe('deletOne', () => {
		it('deletes a movie', () => {
			service.createMovie({
				// 먼저 createMoive로 Movie 객체를 생성해줘야함.
				title: 'Test Movie',
				geners: ['test'],
				year: 2000,
			});
			const allMovies = service.getAll().length;
			service.deleteOne(1);
			const afterDelete = service.getAll().length;

			expect(afterDelete).toBeLessThan(allMovies);
		});

		it('should be return a 404', () => {
			try {
				service.deleteOne(22);
			} catch (e) {
				expect(e).toBeInstanceOf(NotFoundException);
				expect(e.message).toEqual(`Movie with ID 22 not found`);
			}
		});
	});
});
