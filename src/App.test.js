import React from "react";
import { render, waitForElement } from "@testing-library/react";
import App from "./App";
import axios from "axios";

jest.mock("axios");

test("renders learn react link", async () => {
  const mockCharacters = [
    {
      name: "Michael Scott",
      title: "Regional Manager",
      image: "url-goes-here"
    },
    {
      name: "Dwight Schrute",
      title: "Assistant to the Regional Manager",
      image: "url-goes-here"
    },
    { name: "Jim Halpert", title: "Number 2", image: "url-goes-here" }
  ];
  const resp = { data: mockCharacters };
  axios.get.mockResolvedValue(resp);
  const { getByText } = render(<App />);

  const popularCharacter1 = await waitForElement(() =>
    getByText(/Michael Scott/i)
  );
  const popularCharacter2 = await waitForElement(() =>
    getByText(/Dwight Schrute/i)
  );
  const popularCharacter3 = await waitForElement(() =>
    getByText(/Jim Halpert/i)
  );
  expect(popularCharacter1).toBeInTheDocument();
  expect(popularCharacter2).toBeInTheDocument();
  expect(popularCharacter3).toBeInTheDocument();
});
