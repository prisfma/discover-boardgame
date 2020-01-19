import { Test, TestingModule } from '@nestjs/testing';
import { GamePublisherService } from './game-publisher.service';

describe('GamePublisherService', () => {
  let service: GamePublisherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GamePublisherService],
    }).compile();

    service = module.get<GamePublisherService>(GamePublisherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
