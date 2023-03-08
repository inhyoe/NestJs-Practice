import { Body, Controller, Post } from '@nestjs/common';
import { SummarizeDto } from './dto/summarize.dto';
import { SummarizeService } from './summarize.service';

@Controller('summarize')
export class SummarizeController {
	constructor(private summarize: SummarizeService) {}

	@Post()
	summarizeTxt(@Body() dto: JSON) {
		try {
			return this.summarize.sentimentTxt(dto);
		} catch (error) {
			return error;
		}

		// return this.summarize.summarizeTxt(dto);
	}
}
