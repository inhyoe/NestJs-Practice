import { Module } from '@nestjs/common';
import { CreatePictureService } from './create_picture.service';
import { CreatePictureController } from './create_picture.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { create_picture } from './entities/create_picture.entity';

@Module({
	imports: [TypeOrmModule.forFeature([create_picture])],
	providers: [CreatePictureService],
	controllers: [CreatePictureController],
})
export class CreatePictureModule {}
