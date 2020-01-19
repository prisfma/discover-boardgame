import { Injectable } from "@nestjs/common";
import { GameNumberPlayersEntity } from "./game-number-players.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameNumberPlayersService extends TypeOrmCrudService<
  GameNumberPlayersEntity
> {
  constructor(@InjectRepository(GameNumberPlayersEntity) repo) {
    super(repo);
  }
}
