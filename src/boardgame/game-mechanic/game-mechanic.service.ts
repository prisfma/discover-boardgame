import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { InjectRepository } from "@nestjs/typeorm";
import { GameMechanicEntity } from "./game-mechanic.entity";

@Injectable()
export class GameMechanicService extends TypeOrmCrudService<
  GameMechanicEntity
> {
  constructor(@InjectRepository(GameMechanicEntity) repo) {
    super(repo);
  }
}
