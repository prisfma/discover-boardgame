import { Controller } from "@nestjs/common";
import { GameDesignerEntity } from "./game-designer.entity";
import { Crud } from "@nestjsx/crud";
import { GameDesignerService } from "./game-designer.service";

@Crud({
  model: {
    type: GameDesignerEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-designer")
export class GameDesignerController {
  constructor(public service: GameDesignerService) {}
}
