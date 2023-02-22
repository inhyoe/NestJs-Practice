import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(CreateMovieDto){ //? 이 기능을 사용하기 위해서는 npm i @nestjs/mapped-types 패키지를 설치해야함
                                                   //? mapped-types는 타입을 변환시키고 사용할 수 있게하는 패키지 DTO를 변환시키는걸 도와줌
                                                   //* PartialType은 베이스타입이 필요함(변환시키려는 타입)





}


// {
// 	// npm으로 설치한 class-validator
// 	@IsString()
// 	readonly title?: string;
// 	//? ?는 꼭 nullable
// 	@IsNumber()
// 	readonly year?: number;

// 	@IsString({ each: true }) // 각각의 배열의 유효성을 검사해줌
// 	readonly geners?: string[];
// } // 내가 바라는 request
