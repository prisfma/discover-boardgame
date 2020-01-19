import {
  IsString,
  IsISO8601,
  IsInt,
  IsDecimal,
  Max,
  Min
} from "class-validator";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";

@Entity("game_ranking")
export class GameRankingEntity {
  @PrimaryGeneratedColumn("uuid") id: String;

  @IsString()
  @Column("text")
  source: String;

  @IsDecimal()
  @Max(100)
  @Min(0)
  @Column("decimal", { precision: 2, scale: 2 })
  value: Number;

  @IsString()
  @Column("text")
  type: RankingOrigen;

  @CreateDateColumn({ name: "created_at" })
  createdAt: Date;

  @UpdateDateColumn({ name: "updated_at" })
  updatedAt: Date;
}

export enum RankingOrigen {
  MINIMUM,
  MAXIMUM,
  EXACTLY
}
