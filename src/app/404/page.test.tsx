import React from "react";
import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Custom404 from "./page";

// Mock the next/link component
jest.mock("next/link", () => {
  return ({ children }: { children: React.ReactNode }) => <a>{children}</a>;
});

describe("Custom404", () => {
  test("renders the 404 message correctly", () => {
    render(<Custom404 />);
    const heading = screen.queryByText("404 - Page not found");
    expect(heading).not.toBeNull();
  });

  test("renders the description text correctly", () => {
    render(<Custom404 />);
    const description = screen.queryByText(
      "We are sorry, but the page you are looking for does not exist"
    );
    expect(description).not.toBeNull();
  });

  test("renders the 'Go to homepage' button correctly", () => {
    render(<Custom404 />);
    const goHomeButton = screen.queryByRole("button", {
      name: /Go to homepage/i,
    });
    expect(goHomeButton).not.toBeNull();
  });

  test("renders the 'Go to homepage' link with correct href attribute", () => {
    render(<Custom404 />);
    const link = screen.queryByRole("link", { name: /Go to homepage/i });
    expect(link).not.toBeNull();

    if (link) {
      expect(link.getAttribute("href")).toBe("/");
    }
  });
});
