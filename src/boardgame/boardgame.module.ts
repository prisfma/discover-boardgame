import { Module } from "@nestjs/common";
import { GameService } from "./game/game.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { GameEntity } from "./game/game.entity";
import { GameCategoryController } from "./game-category/game-category.controller";
import { GameTypeController } from "./game-type/game-type.controller";
import { GameController } from "./game/game.controller";
import { GameTypeEntity } from "./game-type/game-type.entity";
import { GameCategoryEntity } from "./game-category/game-category.entity";
import { GameTypeService } from "./game-type/game-type.service";
import { GameCategoryService } from "./game-category/game-category.service";
import { GameMechanicService } from "./game-mechanic/game-mechanic.service";
import { GameMechanicController } from "./game-mechanic/game-mechanic.controller";
import { GameThemeController } from "./game-theme/game-theme.controller";
import { GameThemeService } from "./game-theme/game-theme.service";
import { GameFamilyService } from "./game-family/game-family.service";
import { GameDesignerService } from "./game-designer/game-designer.service";
import { GameAuthorService } from "./game-author/game-author.service";
import { GamePublisherService } from "./game-publisher/game-publisher.service";
import { GameFamilyController } from "./game-family/game-family.controller";
import { GameDesignerController } from "./game-designer/game-designer.controller";
import { GameAuthorController } from "./game-author/game-author.controller";
import { GamePublisherController } from "./game-publisher/game-publisher.controller";
import { GameMechanicEntity } from "./game-mechanic/game-mechanic.entity";
import { GameThemeEntity } from "./game-theme/game-theme.entity";
import { GameFamilyEntity } from "./game-family/game-family.entity";
import { GameDesignerEntity } from "./game-designer/game-designer.entity";
import { GameAuthorEntity } from "./game-author/game-author.entity";
import { GamePublisherEntity } from "./game-publisher/game-publisher.entity";
import { NumberPlayersController } from './number-players/number-players.controller';
import { NumberPlayersService } from './number-players/number-players.service';
import { GameRankingService } from './game-ranking/game-ranking.service';
import { GameRankingController } from './game-ranking/game-ranking.controller';

@Module({
  controllers: [
    GameTypeController,
    GameCategoryController,
    GameController,
    GameMechanicController,
    GameThemeController,
    GameFamilyController,
    GameDesignerController,
    GameAuthorController,
    GamePublisherController,
    NumberPlayersController,
    GameRankingController
  ],
  imports: [
    TypeOrmModule.forFeature([
      GameEntity,
      GameTypeEntity,
      GameCategoryEntity,
      GameMechanicEntity,
      GameThemeEntity,
      GameFamilyEntity,
      GameDesignerEntity,
      GameAuthorEntity,
      GamePublisherEntity
    ])
  ],
  providers: [
    GameService,
    GameTypeService,
    GameCategoryService,
    GameMechanicService,
    GameThemeService,
    GameFamilyService,
    GameDesignerService,
    GameAuthorService,
    GamePublisherService,
    NumberPlayersService,
    GameRankingService
  ]
})
export class BoardGameModule {}
