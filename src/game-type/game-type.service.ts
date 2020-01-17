import { Injectable } from "@nestjs/common";
import { GameTypeEntity } from "./game-type.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameTypeService extends TypeOrmCrudService<GameTypeEntity> {
  constructor(@InjectRepository(GameTypeEntity) repo) {
    super(repo);
  }
}
