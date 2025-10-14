import { describe, expect, test, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import DriveLoopProject from "./page";

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("DriveLoop Page", function () {
  test("renders the correct title", () => {
    render(<DriveLoopProject />);
    screen.getByText("DriveLoop App");
  });
  test("renders the right code link", () => {
    render(<DriveLoopProject />);
    const codeLink = screen.queryByRole("link", { name: /Code/i });
    expect(codeLink).not.toBeNull();
    if (codeLink) {
      expect(codeLink.getAttribute("href")).toBe(
        "https://github.com/edithdimboiu/driveloop.git"
      );
    }
  });
  test("renders the right demo link", () => {
    render(<DriveLoopProject />);
    const codeLink = screen.queryByRole("link", { name: /Live Demo/i });
    expect(codeLink).not.toBeNull();
    if (codeLink) {
      expect(codeLink.getAttribute("href")).toBe(
        "https://driveloop.vercel.app"
      );
    }
  });
  test("renders the carousel component", () => {
    render(<DriveLoopProject />);
    screen.getByTestId("carousel");
  });
  test("renders the project description component", () => {
    render(<DriveLoopProject />);
    screen.getByTestId("description");
  });
});
