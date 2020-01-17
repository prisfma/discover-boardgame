import { IsString } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("game_type")
export class GameTypeEntity {
  @PrimaryGeneratedColumn("uuid") id: String;

  @IsString()
  @Column("text")
  name: String;

  @IsString()
  @Column("text")
  description: String;
}
