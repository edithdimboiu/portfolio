import { describe, test, expect, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Home from "./app/page";

// Mock the next/link component
jest.mock("next/link", () => {
  return ({
    children,
    ...rest
  }: {
    children: React.ReactNode;
    href?: string;
    target?: string;
    rel?: string;
  }) => <a {...rest}>{children}</a>;
});

describe("Home", () => {
  test("renders the correct heading with text 'Hey there!'", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /Hey there!/i });
    expect(heading.textContent).toBe("Hey there!");
  });

  test("renders the description text correctly", () => {
    render(<Home />);
    const description =
      /I'm Edith, a passionate Fronted Web Developer living in Switzerland/i;
    screen.getByText(description);
  });

  test("renders the 'Here' link with correct href attribute", () => {
    render(<Home />);
    const projectsLink = screen.getByRole("link", { name: /Here/i });
    expect(projectsLink).not.toBeNull();
    expect(projectsLink.getAttribute("href")).toBe("/projects");
  });

  test("renders the LinkedIn link with correct attributes", () => {
    render(<Home />);
    const linkedinLink = screen.getByRole("link", { name: /Linkedin/i });
    expect(linkedinLink.getAttribute("href")).toBe(
      "https://linkedin.com/in/edith-dimboiu-1670b869"
    );
    expect(linkedinLink.getAttribute("target")).toBe("_blank");
    expect(linkedinLink.getAttribute("rel")).toBe("noopener noreferrer");
  });

  test("renders the GitHub link with correct attributes", () => {
    render(<Home />);
    const githubLink = screen.getByRole("link", { name: /Github/i });
    expect(githubLink.getAttribute("href")).toBe(
      "https://github.com/edithdimboiu"
    );
    expect(githubLink.getAttribute("target")).toBe("_blank");
    expect(githubLink.getAttribute("rel")).toBe("noopener noreferrer");
  });
});
