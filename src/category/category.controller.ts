import { Controller } from "@nestjs/common";
import { CategoryEntity } from "./category.entity";
import { CategoryService } from "./category.service";
import { Crud } from "@nestjsx/crud";

@Crud({
  model: {
    type: CategoryEntity
  },
  params: {
    id: {
      field: "id",
      type: "uuid",
      primary: true
    }
  }
})
@Controller("category")
export class CategoryController {
  constructor(public service: CategoryService) {}
}
