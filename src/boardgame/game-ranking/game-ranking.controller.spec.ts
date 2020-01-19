import { Test, TestingModule } from '@nestjs/testing';
import { GameRankingController } from './game-ranking.controller';

describe('GameRanking Controller', () => {
  let controller: GameRankingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameRankingController],
    }).compile();

    controller = module.get<GameRankingController>(GameRankingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
