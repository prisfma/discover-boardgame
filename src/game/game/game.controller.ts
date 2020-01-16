import { Controller } from '@nestjs/common';
import {
  Crud,
  CrudController,
  CrudRequest,
  Override,
  ParsedBody,
  ParsedRequest,
} from '@nestjsx/crud';
import { GameEntity } from './game.entity';

@Crud({
  model: {
    type: GameEntity,
  },
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
})
@Controller('game')
export class GameController {}
