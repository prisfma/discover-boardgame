import { Module } from '@nestjs/common';
import { GameController } from './game/game.controller';
import { GameService } from './game/game.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GameEntity } from './game/game.entity';


@Module({
  controllers: [GameController],
  imports: [TypeOrmModule.forFeature([GameEntity])],
  providers: [GameService]
})
export class GameModule {}
