import {
  IsInt,
  IsISO8601,
  IsOptional,
  IsString,
  IsUUID,
  Max,
  Min,
  IsDecimal
} from "class-validator";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
  ManyToMany,
  JoinTable
} from "typeorm";
import { GameAuthorEntity } from "../game-author/game-author.entity";
import { GameCategoryEntity } from "../game-category/game-category.entity";
import { GameDesignerEntity } from "../game-designer/game-designer.entity";
import { GameFamilyEntity } from "../game-family/game-family.entity";
import { GameMechanicEntity } from "../game-mechanic/game-mechanic.entity";
import { GamePublisherEntity } from "../game-publisher/game-publisher.entity";
import { GameThemeEntity } from "../game-theme/game-theme.entity";
import { GameTypeEntity } from "../game-type/game-type.entity";

@Entity("game")
export class GameEntity {
  @PrimaryGeneratedColumn("uuid") id: String;

  @IsString()
  @Column("text")
  name: String;

  @IsString()
  @Column("text")
  description: String;

  @IsString()
  @Column("text", { name: "main_type" })
  mainType: String;

  @IsString()
  @Column("text", { name: "language_dependence" })
  languageDependency: String;

  @IsInt()
  @Max(99)
  @Min(0)
  @Column("int", { name: "minPlayerAge" })
  minPlayerAge: number;

  @IsInt()
  @Max(99)
  @Min(0)
  @Column("int", { name: "age_community" })
  minPlayerAgeCommunity: number;

  @IsInt()
  @Min(0)
  @Column("int", { name: "min_duration" })
  minDuration: number;

  @IsInt()
  @Min(0)
  @Column("int", { name: "max_duration" })
  maxDuration: number;

  @IsInt()
  @Min(0)
  @Column("int", { name: "release_year" })
  releaseYear: number;

  @IsDecimal()
  @Max(5)
  @Min(0)
  @Column("decimal", { precision: 2, scale: 2 })
  complexity: number;

  @ManyToMany(type => GameAuthorEntity)
  @JoinTable({ name: "game_game_author" })
  authors: GameAuthorEntity[];

  @ManyToMany(type => GameCategoryEntity)
  @JoinTable({ name: "game_game_category" })
  categories: GameCategoryEntity[];

  @ManyToMany(type => GameDesignerEntity)
  @JoinTable({ name: "game_game_designer" })
  desiners: GameDesignerEntity[];

  @ManyToMany(type => GameFamilyEntity)
  @JoinTable({ name: "game_game_family" })
  families: GameFamilyEntity[];

  @ManyToMany(type => GameMechanicEntity)
  @JoinTable({ name: "game_game_mechanic" })
  mechanics: GameMechanicEntity[];

  @ManyToMany(type => GamePublisherEntity)
  @JoinTable({ name: "game_game_publisher" })
  publishers: GamePublisherEntity[];

  @ManyToMany(type => GameThemeEntity)
  @JoinTable({ name: "game_game_theme" })
  themes: GameThemeEntity[];

  @ManyToMany(type => GameTypeEntity)
  @JoinTable({ name: "game_game_type" })
  types: GameTypeEntity[];
}