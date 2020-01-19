import { Controller } from "@nestjs/common";
import { GameNumberPlayersEntity } from "./game-number-players.entity";
import { Crud } from "@nestjsx/crud";
import { GameNumberPlayersService } from "./game-number-players.service";

@Crud({
  model: {
    type: GameNumberPlayersEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-number-players")
export class GameNumberPlayersController {
  constructor(public service: GameNumberPlayersService) {}
}
