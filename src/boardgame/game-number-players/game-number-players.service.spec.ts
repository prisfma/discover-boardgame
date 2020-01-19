import { Test, TestingModule } from "@nestjs/testing";
import { GameNumberPlayersService } from "./game-number-players.service";

describe("NumberPlayersService", () => {
  let service: GameNumberPlayersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameNumberPlayersService]
    }).compile();

    service = module.get<GameNumberPlayersService>(GameNumberPlayersService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
