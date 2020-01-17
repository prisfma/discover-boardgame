import { Module } from "@nestjs/common";
import { CategoryController } from "./category.controller";
import { CategoryEntity } from "./category.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoryService } from "./category.service";

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  providers: [CategoryService]
})
export class CategoryModule {}
