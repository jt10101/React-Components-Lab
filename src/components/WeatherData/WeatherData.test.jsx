import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import RenderData from "./WeatherData";

const day = "Monday";
const time = "Night";
const conditions = "stormy";
test("loads correct day", async () => {
  render(<RenderData day={day} />);
  //   screen.debug();
  expect(screen.getByRole("heading")).toHaveTextContent("Monday");
  //   expect(screen.getByRole("heading")).toHaveTextContent(new RegExp(`${name}`));
  //   expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent(
  //     `${name}: ${title}`
  //   );
});

test("loads correct condition", async () => {
  render(<RenderData conditions={conditions} />);
  expect(screen.getAllByRole("paragraph")).toHaveTextContent("stormy");
});

test("loads correct time", async () => {
  render(<RenderData time={time} />);
  expect(screen.getAllByRole("paragraph")).toHaveTextContent("Time: Night");
});
