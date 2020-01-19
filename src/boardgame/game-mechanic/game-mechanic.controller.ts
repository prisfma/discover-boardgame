import { Controller } from "@nestjs/common";
import { GameMechanicService } from "./game-mechanic.service";
import { GameMechanicEntity } from "./game-mechanic.entity";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: {
    type: GameMechanicEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-mechanic")
export class GameMechanicController {
  constructor(public service: GameMechanicService) {}
}
