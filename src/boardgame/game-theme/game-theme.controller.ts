import { Controller } from "@nestjs/common";
import { GameThemeEntity } from "./game-theme.entity";
import { Crud } from "@nestjsx/crud";
import { GameThemeService } from "./game-theme.service";

@Crud({
  model: {
    type: GameThemeEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-theme")
export class GameThemeController {
  constructor(public service: GameThemeService) {}
}
