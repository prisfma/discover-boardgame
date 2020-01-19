import { Test, TestingModule } from '@nestjs/testing';
import { GameDesignerController } from './game-designer.controller';

describe('GameDesigner Controller', () => {
  let controller: GameDesignerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameDesignerController],
    }).compile();

    controller = module.get<GameDesignerController>(GameDesignerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
