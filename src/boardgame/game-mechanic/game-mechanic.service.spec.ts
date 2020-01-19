import { Test, TestingModule } from '@nestjs/testing';
import { GameMechanicService } from './game-mechanic.service';

describe('GameMechanicService', () => {
  let service: GameMechanicService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameMechanicService],
    }).compile();

    service = module.get<GameMechanicService>(GameMechanicService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
