import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
	//Database Type

	type: 'postgres',
	host: 'localhost',
	port: 5432,
	username: 'emchang',
	password: 'postgres',
	database: 'picasso',
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: true,
};
