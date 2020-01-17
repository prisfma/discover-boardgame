import { Module } from "@nestjs/common";
import { GameTypeService } from "./game-type.service";
import { GameTypeController } from "./game-type.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameTypeEntity } from "./game-type.entity";

@Module({
  providers: [GameTypeService],
  controllers: [GameTypeController],
  imports: [TypeOrmModule.forFeature([GameTypeEntity])]
})
export class GameTypeModule {}
