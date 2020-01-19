import { Controller } from "@nestjs/common";
import { GameCategoryService } from "./game-category.service";
import { GameCategoryEntity } from "./game-category.entity";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: {
    type: GameCategoryEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-category")
export class GameCategoryController {
  constructor(public service: GameCategoryService) {}
}
