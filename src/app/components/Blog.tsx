import Divider from "./Divider";
import ArticleCard from "./ArticleCard";
import { BlogPost } from "../types/blog";

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section>
      <p className="mb-8  text-lg md:text-2xl leading-relaxed text-justify italic">
        I started this blog to solidify my learning journey. Writing helps me
        consolidate concepts and explore topics in depth. It also allows me to
        capture the questions that arise and share my perspective. My goal is to
        turn my personal learning into a resource that others can benefit from.
      </p>
      <p className="font-bold italic">Happy reading!</p>
      <Divider />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {posts.map((post: BlogPost) => (
          <ArticleCard key={post.dateFile} post={post} />
        ))}
      </div>
    </section>
  );
};
export default BlogSection;
