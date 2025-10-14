import { describe, expect, test, jest, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import PortfolioProject from "./page";

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("PortfolioProject Page", function () {
  beforeEach(() => {
    render(<PortfolioProject />);
  });
  test("renders the correct title", () => {
    screen.getByText("Portfolio");
  });

  test("renders the right code link", () => {
    const codeLink = screen.queryByRole("link", { name: /Code/i });
    if (codeLink) {
      expect(codeLink.getAttribute("href")).toBe(
        "https://github.com/edithdimboiu/portfolio.git"
      );
    }
  });
  test("renders the carousel component", () => {
    screen.getByTestId("carousel");
  });
  test("renders the project description component", () => {
    screen.getByTestId("description");
  });
});
