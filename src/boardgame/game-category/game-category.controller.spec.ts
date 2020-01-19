import { Test, TestingModule } from '@nestjs/testing';
import { GameCategoryController } from './game-category.controller';

describe('GameCategory Controller', () => {
  let controller: GameCategoryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameCategoryController],
    }).compile();

    controller = module.get<GameCategoryController>(GameCategoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
