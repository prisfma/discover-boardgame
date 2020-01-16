import { IsInt, IsISO8601, IsOptional, IsString, IsUUID, Max, Min, IsDecimal } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';


@Entity('game')
export class GameEntity {
  @PrimaryGeneratedColumn('uuid') id: String;

  @IsString()
  @Column('text')
  name: String;

  @IsString()
  @Column('text')
  description: String;
  
  @IsString()
  @Column('text', {name: 'main_type'})
  mainType:String ;

  @IsString()
  @Column('text', {name: 'language_dependence'})
  languageDependency:String;
 
  @IsInt()
  @Max(99)
  @Min(0)
  @Column('int', { name: 'minPlayerAge' })
  minPlayerAge: number;

  @IsInt()
  @Max(99)
  @Min(0)
  @Column('int', { name: 'age_community' })
  minPlayerAgeCommunity: number;
    
  @IsInt()
  @Min(0)
  @Column('int', { name: 'min_duration',  })
  minDuration: number;

  @IsInt()
  @Min(0)
  @Column('int', { name: 'max_duration',  })
  maxDuration: number;

  @IsInt()
  @Min(0)
  @Column('int', { name: 'release_year',  })
  releaseYear: number;

  @IsDecimal()
  @Max(5)
  @Min(0)
  @Column('decimal', { precision: 2, scale: 2})
  complexity: number;

}