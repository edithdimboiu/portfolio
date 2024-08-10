import React from "react";
import { describe, test, expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer";

const linkedinURL = "https://linkedin.com/in/edith-dimboiu-1670b869";
const githubURL = "https://github.com/edithdimboiu";

describe("Footer", () => {
  test("Should render footer component without crashing", () => {
    render(<Footer />);
    const footerElement = document.querySelector("footer");
    expect(footerElement).not.toBeNull();
  });

  test("Should display the correct copyright text", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = `Copyright © ${currentYear} - All right reserved`;
    screen.getByText(copyrightText);
  });

  test("Should contain LinkedIn link with correct attributes", () => {
    render(<Footer />);
    const linkedinLink = screen.getByTestId("linkedin-link");
    expect(linkedinLink).not.toBeNull();
    if (linkedinLink) {
      expect(linkedinLink.getAttribute("href")).toBe(linkedinURL);
      expect(linkedinLink.getAttribute("target")).toBe("_blank");
      expect(linkedinLink.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });

  test("Should contain GitHub link with correct attributes", () => {
    render(<Footer />);
    const githubLink = screen.getByTestId("github-link");
    expect(githubLink).not.toBeNull();
    if (githubLink) {
      expect(githubLink.getAttribute("href")).toBe(githubURL);
      expect(githubLink.getAttribute("target")).toBe("_blank");
      expect(githubLink.getAttribute("rel")).toBe("noopener noreferrer");
    }
  });
});
