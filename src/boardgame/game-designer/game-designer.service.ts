import { Injectable } from "@nestjs/common";
import { GameDesignerEntity } from "./game-designer.entity";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GameDesignerService extends TypeOrmCrudService<
  GameDesignerEntity
> {
  constructor(@InjectRepository(GameDesignerEntity) repo) {
    super(repo);
  }
}
