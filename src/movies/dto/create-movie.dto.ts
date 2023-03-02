import { IsNumber, IsOptional, IsString } from 'class-validator';
import { PrimaryColumn } from 'typeorm';
// https://github.com/typestack/class-validator

export class CreateMovieDto {
	// npm으로 설치한 class-validator
	@IsString()
	readonly title: string;

	@IsNumber()
	readonly year: number;

	@IsOptional()
	@IsString({ each: true }) // 각각의 배열의 유효성을 검사해줌
	readonly geners: string[];
} // 내가 바라는 request
