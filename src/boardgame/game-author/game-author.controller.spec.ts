import { Test, TestingModule } from '@nestjs/testing';
import { GameAuthorController } from './game-author.controller';

describe('GameAuthor Controller', () => {
  let controller: GameAuthorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameAuthorController],
    }).compile();

    controller = module.get<GameAuthorController>(GameAuthorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
