import { Injectable } from "@nestjs/common";
import { GameFamilyEntity } from "./game-family.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameFamilyService extends TypeOrmCrudService<GameFamilyEntity> {
  constructor(@InjectRepository(GameFamilyEntity) repo) {
    super(repo);
  }
}
