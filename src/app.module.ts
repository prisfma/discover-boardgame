import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [
      TypeOrmModule.forRoot({
        host: 'localhost',
        port: 5432,
        type: 'postgres',
        username: 'postgres',
        password: '',
        database: 'postgres',
        schema: 'public',
        entities: ['dist/**/*.entity.js'],
        synchronize: true,
        logging: true,
      }),
      GameModule,
      CategoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


