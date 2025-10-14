import { describe, expect, test, beforeEach } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Home from "../components/HomePageClient";
import "@testing-library/jest-dom";

const MOCK_POSTS = [
  {
    title: "Test Post",
    summary: "Summary",
    dateFile: "20251012",
    displayDate: "12/10/2025",
    content: "Some content",
    slug: "test-post",
  },
];

describe("Home component", () => {
  let user: ReturnType<typeof userEvent.setup>;

  beforeEach(() => {
    user = userEvent.setup();
    render(<Home posts={MOCK_POSTS} />);
  });

  test("should render Hero section initially", () => {
    expect(screen.getByText(/Fullstack Web Developer/i)).toBeTruthy();
    expect(screen.getByText(/who likes to bring ideas to life/i)).toBeTruthy();
  });

  test("should not show Blog or Projects sections initially", () => {
    expect(screen.queryByRole("region", { name: /blog-section/i })).toBeNull();
    expect(screen.queryByRole("region", { name: /blog-section/i })).toBeNull();
  });

  test("should show Blog section when Blog button is clicked", async () => {
    const blogButton = screen.getByRole("button", { name: /blog/i });
    await user.click(blogButton);
    expect(screen.getByText(/test post/i)).toBeTruthy();
    expect(
      screen.queryByRole("region", { name: /projects-section/i })
    ).toBeNull();
  });

  test("should show Projects section when Projects button is clicked and hide Blog", async () => {
    const blogButton = screen.getByRole("button", { name: /blog/i });
    await user.click(blogButton);
    expect(screen.getByText(/test post/i)).toBeTruthy();

    const projectsButton = screen.getByRole("button", { name: /projects/i });
    await user.click(projectsButton);
    expect(screen.queryByText(/test post/i)).toBeNull();
    expect(screen.queryByRole("region", { name: /blog-section/i })).toBeNull();
  });

  test("should toggle Blog section off when clicking Blog again", async () => {
    const blogButton = screen.getByRole("button", { name: /blog/i });
    await user.click(blogButton);
    expect(screen.getByText(/test post/i)).toBeTruthy();
    await user.click(blogButton);
    expect(screen.queryByText(/test post/i)).toBeNull();
  });
});
