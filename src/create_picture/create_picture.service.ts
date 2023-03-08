import { Injectable } from '@nestjs/common';
import { CreatePictureDto } from './dto/create_picture.dto';
import { create_picture } from './create_picture.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { exec, execSync } from 'child_process';

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
		
		exec(`./shell.sh "${user_name}" "${title}"`)

		const create_picture = this.create({
			title,
         user_email,
         user_name,
		});
		return;
	}
}
