import React from "react";
import { render } from "@testing-library/react";
import { axe } from "jest-axe";
import "jest-axe/extend-expect";
import CharacterCard from "./CharacterCard";

test("the character card should be accessible", async () => {
  const { container } = render(
    <CharacterCard
      title="Secret Agent"
      name="Michael Scarn"
      image="//my-image.com/action-shot.jpg"
    />
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
