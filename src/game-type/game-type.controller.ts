import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { GameTypeService } from "./game-type.service";
import { GameTypeEntity } from "./game-type.entity";

@Crud({
  model: {
    type: GameTypeEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-type")
export class GameTypeController {
  constructor(public service: GameTypeService) {}
}
