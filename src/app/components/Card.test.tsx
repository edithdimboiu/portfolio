import { describe, expect, test, jest } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Card from "./Card";

// Mock for `next/image`
jest.mock("next/image", () => {
  return (props: React.ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  );
});

// Mock for `next/link`
jest.mock("next/link", () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  );
});

describe("Card", () => {
  const props = {
    title: "title",
    imageSource: "/image.jpg",
    description: "description",
    demoLink: "https://demo.example.com",
    githubLink: "https://github.com/example",
    caseStudyLink: "https://casestudy.example.com",
  };

  test("sets correct title", () => {
    render(<Card {...props} />);
    screen.getByText("title");
  });

  test("sets correct description", () => {
    render(<Card {...props} />);
    screen.getByText("description");
  });

  test("renders correct image source", () => {
    render(<Card {...props} />);
    const image = screen.queryByAltText("No Picture available");
    expect(image).not.toBeNull();
    if (image) {
      // Check if the `src` attribute contains the expected path
      expect(image.getAttribute("src")).toMatch(
        /\/_next\/image\?url=%2Fimage\.jpg/
      );
    }
  });

  test("sets correct demo link", () => {
    render(<Card {...props} />);
    const demoLink = screen.queryByRole("link", { name: /Live Demo/i });
    expect(demoLink).not.toBeNull();
    if (demoLink) {
      expect(demoLink.getAttribute("href")).toBe("https://demo.example.com");
    }
  });

  test("sets correct github link", () => {
    render(<Card {...props} />);
    const githubLink = screen.queryByRole("link", { name: /Code/i });
    expect(githubLink).not.toBeNull();
    if (githubLink) {
      expect(githubLink.getAttribute("href")).toBe(
        "https://github.com/example"
      );
    }
  });

  test("sets correct case study link", () => {
    render(<Card {...props} />);
    const caseStudyLink = screen.queryByRole("link", { name: /Case study/i });
    expect(caseStudyLink).not.toBeNull();
    if (caseStudyLink) {
      expect(caseStudyLink.getAttribute("href")).toBe(
        "https://casestudy.example.com"
      );
    }
  });
});
