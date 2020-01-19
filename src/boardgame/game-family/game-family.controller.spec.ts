import { Test, TestingModule } from '@nestjs/testing';
import { GameFamilyController } from './game-family.controller';

describe('GameFamily Controller', () => {
  let controller: GameFamilyController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameFamilyController],
    }).compile();

    controller = module.get<GameFamilyController>(GameFamilyController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
