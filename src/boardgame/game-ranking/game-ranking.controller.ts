import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { GameRankingEntity } from "./game-ranking.entity";
import { GameRankingService } from "./game-ranking.service";

@Crud({
  model: {
    type: GameRankingEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-ranking")
export class GameRankingController {
  constructor(public service: GameRankingService) {}
}
