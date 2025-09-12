import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "src/app/articles");
const outputFile = path.join(process.cwd(), "src/data/posts.json");

export function getAllPosts() {
  const files = fs.readdirSync(postsDir);
  return files
    .map(fileName => {
      const fullPath = path.join(postsDir, fileName);
      const raw = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(raw);

      const dateFile = fileName.replace(/\.mdx?$/, "");
      const displayDate = `${dateFile.slice(6, 8)}/${dateFile.slice(
        4,
        6
      )}/${dateFile.slice(0, 4)}`;
      const summary =
        content.replace(/[#_*`>!-]/g, "").slice(0, 100) +
        (content.length > 100 ? "..." : "");

      return {
        title: data.title || "No title",
        dateFile,
        displayDate,
        content,
        summary,
      };
    })
    .sort((a, b) => b.dateFile.localeCompare(a.dateFile));
}

fs.mkdirSync(path.dirname(outputFile), { recursive: true }); //create the folder if it doesn't exist
fs.writeFileSync(outputFile, JSON.stringify(getAllPosts(), null, 2), "utf-8");
