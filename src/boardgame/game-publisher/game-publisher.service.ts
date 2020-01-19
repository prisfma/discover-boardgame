import { Injectable } from "@nestjs/common";
import { TypeOrmCrudService } from "@nestjsx/crud-typeorm";
import { GamePublisherEntity } from "./game-publisher.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class GamePublisherService extends TypeOrmCrudService<
  GamePublisherEntity
> {
  constructor(@InjectRepository(GamePublisherEntity) repo) {
    super(repo);
  }
}
