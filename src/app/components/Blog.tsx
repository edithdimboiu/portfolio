import Divider from "./Divider";
import ArticleCard from "./ArticleCard";

const blogPosts = [
  {
    id: 1,
    title: "Article 1",
    date: "March 3, 2025",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus odit iste ex ut vitae reprehenderit quam quo nihil? Possimus libero totam veritatis ",
    slug: "article-1",
  },
  {
    id: 2,
    title: "Article 2",
    date: "March 4, 2025",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus odit iste ex ut vitae reprehenderit quam quo nihil? Possimus libero totam veritatis ",
    slug: "article-2",
  },
  {
    id: 3,
    title: "Article 3",
    date: "March 7, 2025",
    summary:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus odit iste ex ut vitae reprehenderit quam quo nihil? Possimus libero totam veritatis ",
    slug: "article-3",
  },
];

const BlogSection = () => {
  return (
    <section>
      <p className="mb-8  text-lg md:text-2xl leading-relaxed text-justify">
        I started this blog as an educational support tool for myself throughout
        my learning journey. Writing helps me consolidate concepts, revisit
        important topics that may need a deeper understanding and even create a
        sort of personal cheat sheet. Each article also carries with it a
        responsibility - to document, research and truly understand what’s
        happening behind the scenes, because explaining something clearly means
        I first need to understand it myself.
      </p>
      <Divider />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {blogPosts.map(post => (
          <ArticleCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
};
export default BlogSection;
