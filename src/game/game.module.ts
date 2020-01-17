import { Module } from '@nestjs/common';
import { GameController } from './game.controller';
import { GameService } from './game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './game.entity';


@Module({
  controllers: [GameController],
  imports: [TypeOrmModule.forFeature([GameEntity])],
  providers: [GameService]
})
export class GameModule {}
