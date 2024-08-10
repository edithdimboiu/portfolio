import { describe, expect, test, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import PortfolioProject from "./page";

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("PortfolioProject Page", function () {
  test("renders the correct title", () => {
    render(<PortfolioProject />);
    screen.getByText("Portfolio");
  });

  test("renders the right code link", () => {
    render(<PortfolioProject />);
    const codeLink = screen.queryByRole("link", { name: /Code/i });
    expect(codeLink).not.toBeNull();
    if (codeLink) {
      expect(codeLink.getAttribute("href")).toBe(
        "https://github.com/edithdimboiu/portfolio.git"
      );
    }
  });
  test("renders the carousel component", () => {
    render(<PortfolioProject />);
    screen.getByTestId("carousel");
  });
  test("renders the project description component", () => {
    render(<PortfolioProject />);
    screen.getByTestId("description");
  });
});
