import { Test, TestingModule } from '@nestjs/testing';
import { GameRankingService } from './game-ranking.service';

describe('GameRankingService', () => {
  let service: GameRankingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameRankingService],
    }).compile();

    service = module.get<GameRankingService>(GameRankingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
