import { Test, TestingModule } from '@nestjs/testing';
import { NumberPlayersController } from './number-players.controller';

describe('NumberPlayers Controller', () => {
  let controller: NumberPlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NumberPlayersController],
    }).compile();

    controller = module.get<NumberPlayersController>(NumberPlayersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
