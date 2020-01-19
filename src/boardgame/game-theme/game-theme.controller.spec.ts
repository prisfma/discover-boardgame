import { Test, TestingModule } from '@nestjs/testing';
import { GameThemeController } from './game-theme.controller';

describe('GameTheme Controller', () => {
  let controller: GameThemeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameThemeController],
    }).compile();

    controller = module.get<GameThemeController>(GameThemeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
