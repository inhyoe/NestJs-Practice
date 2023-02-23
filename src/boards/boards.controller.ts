import { Controller } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
   // boardService :BoardsService;
   // constructor(boardService :BoardsService){
   //    this.boardService = boardService;
   // }
   // 이렇게 해야만 하지만 접근 제한자 Private를 사용하여 소스코드를 간단하게 만들 수 있음
   // 접근제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됨

	constructor(private boardsService: BoardsService) {} // dependencies injection
   // 원래는 private를 사용하지 않을 시 boardsService 파라미터에 BoardService객체를 타입으로 지정후
   // 
}
