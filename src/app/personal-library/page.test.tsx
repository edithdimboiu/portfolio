import { describe, expect, test, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import MyLibraryProject from "./page";

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("Personal Library Page", function () {
  test("renders the correct title", () => {
    render(<MyLibraryProject />);
    screen.getByText("Personal Library");
  });
  test("renders the right code link", () => {
    render(<MyLibraryProject />);
    const codeLink = screen.queryByRole("link", { name: /Code/i });
    expect(codeLink).not.toBeNull();
    if (codeLink) {
      expect(codeLink.getAttribute("href")).toBe(
        "https://github.com/edithdimboiu/PersonalLibrary.git"
      );
    }
  });
  test("renders the right demo link", () => {
    render(<MyLibraryProject />);
    const codeLink = screen.queryByRole("link", { name: /Live Demo/i });
    expect(codeLink).not.toBeNull();
    if (codeLink) {
      expect(codeLink.getAttribute("href")).toBe(
        "https://personal-library.edith.info"
      );
    }
  });
  test("renders the carousel component", () => {
    render(<MyLibraryProject />);
    screen.getByTestId("carousel");
  });
  test("renders the project description component", () => {
    render(<MyLibraryProject />);
    screen.getByTestId("description");
  });
});
