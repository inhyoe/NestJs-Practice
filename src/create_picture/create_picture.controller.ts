import { Body, Controller, Post } from '@nestjs/common';
import { create_picture } from './entities/create_picture.entity';
import { CreatePictureService } from './create_picture.service';
import { CreatePictureDto } from './dto/create_picture.dto';

@Controller('picture')
export class CreatePictureController {
	constructor(private readonly createPictureService: CreatePictureService) {}

	@Post('create')
	async createPicture(
		@Body() createPictureDto: CreatePictureDto,
	): Promise<String> {
		console.log('calling');
		console.log(createPictureDto);
		return await this.createPictureService.createPicture(createPictureDto);
	}
}
