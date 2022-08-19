import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

//joi로 유효성 검사 추가하기
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,

      entities: [],
      synchronize: true, //개발 모드에서 설정
      autoLoadEntities: true, //자동으로 entity 로드
      logging: true, //개발 환경에서 필요
      keepConnectionAlive: true, //연결할 때 까지 계속 시도
    }),
  ],
})
export class AppModule {}
