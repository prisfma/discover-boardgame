import { Test, TestingModule } from '@nestjs/testing';
import { GameFamilyService } from './game-family.service';

describe('GameFamilyService', () => {
  let service: GameFamilyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameFamilyService],
    }).compile();

    service = module.get<GameFamilyService>(GameFamilyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
