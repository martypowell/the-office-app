import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const popularCharacter1 = getByText(/Michael Scott/i);
  const popularCharacter2 = getByText(/Dwight Schrute/i);
  const popularCharacter3 = getByText(/Jim Halpert/i);
  expect(popularCharacter1).toBeInTheDocument();
  expect(popularCharacter2).toBeInTheDocument();
  expect(popularCharacter3).toBeInTheDocument();
});
