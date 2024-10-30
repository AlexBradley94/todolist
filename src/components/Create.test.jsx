import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import Create from "./Create";
import "@testing-library/jest-dom";

afterEach(cleanup);

it("Adds a new item", () => {
  const createInput = screen.queryAllByTestId("createInput");
  const createButton = screen.queryAllByTestId("createButton");
  const onClick = jest.fn();

  fireEvent.click(createButton);
  expect(createInput.value).toEqual("Test item");
});
