import { Controller } from "@nestjs/common";
import { Crud } from "@nestjsx/crud";
import { GamePublisherEntity } from "./game-publisher.entity";
import { GamePublisherService } from "./game-publisher.service";

@Crud({
  model: {
    type: GamePublisherEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("game-publisher")
export class GamePublisherController {
  constructor(public service: GamePublisherService) {}
}
