import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { GameCategoryEntity } from "./game-category.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameCategoryService extends TypeOrmCrudService<
  GameCategoryEntity
> {
  constructor(@InjectRepository(GameCategoryEntity) repo) {
    super(repo);
  }
}
