import { Test, TestingModule } from '@nestjs/testing';
import { GameMechanicController } from './game-mechanic.controller';

describe('GameMechanic Controller', () => {
  let controller: GameMechanicController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameMechanicController],
    }).compile();

    controller = module.get<GameMechanicController>(GameMechanicController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
