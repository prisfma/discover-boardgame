import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { GameRankingEntity } from "./game-ranking.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameRankingService extends TypeOrmCrudService<GameRankingEntity> {
  constructor(@InjectRepository(GameRankingEntity) repo) {
    super(repo);
  }
}
