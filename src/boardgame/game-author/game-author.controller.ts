import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { GameAuthorEntity } from "./game-author.entity";
import { GameAuthorService } from "./game-author.service";

@Crud({
  model: {
    type: GameAuthorEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-author")
export class GameAuthorController {
  constructor(public service: GameAuthorService) {}
}
