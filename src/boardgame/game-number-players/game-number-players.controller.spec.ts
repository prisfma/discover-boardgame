import { Test, TestingModule } from "@nestjs/testing";
import { GameNumberPlayersController } from "./game-number-players.controller";

describe("NumberPlayers Controller", () => {
  let controller: GameNumberPlayersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameNumberPlayersController]
    }).compile();

    controller = module.get<GameNumberPlayersController>(
      GameNumberPlayersController
    );
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
