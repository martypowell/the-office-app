import axios from "axios";
import { GetPopularCharacters } from "./CharacterService";

jest.mock("axios");

describe("Get Popular Characters", () => {
  test("should return all popular characters by default", () => {
    const mockCharacters = [
      { name: "Michael Scott" },
      { name: "Kevin Malone" }
    ];
    const resp = { data: mockCharacters };
    axios.get.mockResolvedValue(resp);

    return GetPopularCharacters().then(characters =>
      expect(characters).toEqual(mockCharacters)
    );
  });
  test("should return return the most popular character if a limit of 1 is specified", () => {
    const mockCharacters = [
      { name: "Michael Scott" },
      { name: "Kevin Malone" }
    ];
    const resp = { data: mockCharacters };
    axios.get.mockResolvedValue(resp);

    return GetPopularCharacters(1).then(characters =>
      expect(characters).toEqual([mockCharacters[0]])
    );
  });
});
