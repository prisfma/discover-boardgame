import { Controller } from "@nestjs/common";
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest
} from "@nestjsx/crud";
import { GameEntity } from "./game.entity";
import { GameService } from "./game.service";

@Crud({
  model: {
    type: GameEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game")
export class GameController {
  constructor(public service: GameService) {}
}
