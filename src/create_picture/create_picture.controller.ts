import { Controller } from '@nestjs/common';
import { CreatePictureService } from './create_picture.service';

@Controller('create-nft')
export class CreatePictureController {
	constructor(private readonly createPictureService: CreatePictureService) {}
}
