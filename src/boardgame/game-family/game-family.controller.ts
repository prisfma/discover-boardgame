import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { GameFamilyEntity } from "./game-family.entity";
import { GameFamilyService } from "./game-family.service";

@Crud({
  model: {
    type: GameFamilyEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-family")
export class GameFamilyController {
  constructor(public service: GameFamilyService) {}
}
