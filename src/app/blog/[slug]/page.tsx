import posts from "@/data/posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return <a {...props} target="_blank" rel="noopener noreferrer" />;
  },
  h1: ({ ...props }) => (
    <h1
      className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-2 text-left"
      {...props}
    />
  ),
  h3: ({ ...props }) => (
    <h3 className="text-xl md:text-2xl text-left" {...props} />
  ),
  p: ({ ...props }) => <p className="text-base md:text-xl" {...props} />,
  li: ({ ...props }) => <li className="text-base md:text-xl " {...props} />,
  pre: ({ ...props }) => <pre className="text-xs md:text-lg  " {...props} />,
  code: ({ ...props }) => <code className="text-base md:text-lg" {...props} />,
  span: ({ ...props }) => <span className="text-base md:text-lg " {...props} />,
};

export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = posts.find(p => p.slug === params.slug);

  if (!post) {
    return <p className="text-2xl">Article not found.</p>;
  }

  const fullContent = `# ${post.title}\n\n**${post.displayDate}**\n\n${post.content}`;

  return (
    // <main className="max-w-3xl sm:mx-auto sm:p-4">
    <article className="prose lg:prose-xl prose-business text-justify">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
        components={components}
      >
        {fullContent}
      </ReactMarkdown>
    </article>
    // </main>
  );
}
