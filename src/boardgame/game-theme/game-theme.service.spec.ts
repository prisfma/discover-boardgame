import { Test, TestingModule } from '@nestjs/testing';
import { GameThemeService } from './game-theme.service';

describe('GameThemeService', () => {
  let service: GameThemeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameThemeService],
    }).compile();

    service = module.get<GameThemeService>(GameThemeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
