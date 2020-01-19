import { Test, TestingModule } from '@nestjs/testing';
import { NumberPlayersService } from './number-players.service';

describe('NumberPlayersService', () => {
  let service: NumberPlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NumberPlayersService],
    }).compile();

    service = module.get<NumberPlayersService>(NumberPlayersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
