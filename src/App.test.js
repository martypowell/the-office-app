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

  // Expect a loading message
  expect(getByText(/Loading.*.../i)).toBeInTheDocument();

  // Expect Dynamic Data To Appear once ajax request is done
  await waitForElement(() => getByText(/Michael Scott/i));
  await waitForElement(() => getByText(/Dwight Schrute/i));
  await waitForElement(() => getByText(/Jim Halpert/i));

  expect(getByText(/vote now/i)).toBeInTheDocument();
});
