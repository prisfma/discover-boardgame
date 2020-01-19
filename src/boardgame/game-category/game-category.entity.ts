import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("game_category")
export class GameCategoryEntity {
  @PrimaryGeneratedColumn("uuid") id: String;

  @IsString()
  @Column("text")
  name: String;

  @IsString()
  @Column("text")
  description: String;
}
