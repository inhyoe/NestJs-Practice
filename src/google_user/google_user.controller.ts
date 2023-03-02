import { Body, Controller, Post } from '@nestjs/common';
import { GoogleUserService } from './google_user.service';
import { CreateGoogleUserDto } from './dto/create-user.dto';

@Controller('google-user')
export class GoogleUserController {
	constructor(private googleUserService: GoogleUserService) {}

	@Post()
	// test(@Body() body) {
	// 	console.log(body);
	// }
	createGoogleUser(
		@Body() createGoogleUserDto: CreateGoogleUserDto,
	): Promise<CreateGoogleUserDto> {
		console.log(createGoogleUserDto);
		return this.googleUserService.createUser(createGoogleUserDto);
	}
}
