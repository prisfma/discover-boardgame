import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { GameEntity } from './game.entity';
import { InjectRepository } from '@nestjs/typeorm';

  
@Injectable()
export class GameService extends TypeOrmCrudService<GameEntity> {
  constructor(@InjectRepository(GameEntity) repo) {
    super(repo);
  }

}
