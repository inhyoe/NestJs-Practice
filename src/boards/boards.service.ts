import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

@Injectable() // DB작업을 여기서 하면 됨
export class BoardsService {
	// private board: Board[] = []; // 메모리를 이용한 데이터 저장 방법

	constructor(
		// @InjectRepository(Board) // 삭제
		// @InjectRepository(BoardRepository) // 삭제
		private boardRepository: BoardRepository,
	) {}

	createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
		return this.boardRepository.createBoard(createBoardDto);
	}

	async getBoardById(id: number): Promise<Board> {
		console.log(id);
		const found = await this.boardRepository.findOneBy({ id }); //!고친부분

		if (!found) {
			throw new NotFoundException(`Can not find board id : ${id}`);
		}
		return found;
	}
}
