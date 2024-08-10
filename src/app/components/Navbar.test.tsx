import { describe, test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});
describe("Navbar", () => {
  test("renders navbar component without crashing", () => {
    render(<Navbar />);
    const navbarElement = document.querySelector("nav");
    expect(navbarElement).not.toBeNull();
  });

  test("has correct h1 text", () => {
    render(<Navbar />);
    screen.getByText("ED");
  });

  test("has correct portfolio link text and href", () => {
    render(<Navbar />);
    const portfolioLink = screen.getByText("Portfolio");
    expect(portfolioLink.getAttribute("href")).toBe("/projects");
  });
});
