import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeORMConfig: TypeOrmModuleOptions = {
	//Database Type

	type: 'postgres',
	host: 'localhost',
	port: Number(process.env.DB_PORT),
	username: process.env.USER_NAME,
	password: process.env.PASSWORD,
	database: process.env.DB_DATABASE,
	entities: [__dirname + '/../**/*.entity.{js,ts}'],
	synchronize: true,
};
