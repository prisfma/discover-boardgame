import { Test, TestingModule } from '@nestjs/testing';
import { GameAuthorService } from './game-author.service';

describe('GameAuthorService', () => {
  let service: GameAuthorService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameAuthorService],
    }).compile();

    service = module.get<GameAuthorService>(GameAuthorService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
