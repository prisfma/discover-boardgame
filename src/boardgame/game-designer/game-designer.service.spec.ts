import { Test, TestingModule } from '@nestjs/testing';
import { GameDesignerService } from './game-designer.service';

describe('GameDesignerService', () => {
  let service: GameDesignerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameDesignerService],
    }).compile();

    service = module.get<GameDesignerService>(GameDesignerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
