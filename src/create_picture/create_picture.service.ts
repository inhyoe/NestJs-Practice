import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create_picture.dto';
import { create_picture } from './create_picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';

export class CreatePictureService extends Repository<create_picture> {
	constructor(
		@InjectRepository(create_picture) private dataSource: DataSource,
	) {
		super(create_picture, dataSource.manager);
	}
	async createPicture(
		createPictureDto: CreatePictureDto,
	): Promise<create_picture> {
		const { title, user_email, user_name } = createPictureDto;

      //이제 이 타이틀이 스테이블 디퓨전을 만들 쉘로 넘어가야함

		const create_picture = this.create({});
		return;
	}
}
