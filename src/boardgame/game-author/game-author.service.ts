import { Injectable } from "@nestjs/common";
import { GameAuthorEntity } from "./game-author.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameAuthorService extends TypeOrmCrudService<GameAuthorEntity> {
  constructor(@InjectRepository(GameAuthorEntity) repo) {
    super(repo);
  }
}
