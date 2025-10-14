import { describe, test, expect, jest, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});
const linkedinURL = "https://linkedin.com/in/edith-dimboiu-1670b869";
const githubURL = "https://github.com/edithdimboiu";

describe("Navbar", () => {
  beforeEach(() => {
    render(<Navbar />);
  });
  test("renders navbar component without crashing", () => {
    const navbarElement = document.querySelector("nav");
    expect(navbarElement).not.toBeNull();
  });

  test("has correct h1 text", () => {
    const heading = screen.getByText(/Edith Dimboiu/i);
    expect(heading).toBeTruthy();
  });

  test("Should contain LinkedIn link with correct attributes", () => {
    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).not.toBeNull();
    if (linkedinLink) {
      expect(linkedinLink.getAttribute("href")).toBe(linkedinURL);
      expect(linkedinLink.getAttribute("target")).toBe("_blank");
      expect(linkedinLink.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });

  test("Should contain GitHub link with correct attributes", () => {
    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).not.toBeNull();
    if (githubLink) {
      expect(githubLink.getAttribute("href")).toBe(githubURL);
      expect(githubLink.getAttribute("target")).toBe("_blank");
      expect(githubLink.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });
});
