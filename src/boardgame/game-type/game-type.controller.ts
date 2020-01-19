import { Controller } from "@nestjs/common";
import { GameTypeEntity } from "./game-type.entity";
import { GameTypeService } from "./game-type.service";
import { Crud } from "@nestjsx/crud";

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
