import { Test, TestingModule } from '@nestjs/testing';
import { GamePublisherController } from './game-publisher.controller';

describe('GamePublisher Controller', () => {
  let controller: GamePublisherController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GamePublisherController],
    }).compile();

    controller = module.get<GamePublisherController>(GamePublisherController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
