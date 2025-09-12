import posts from "@/data/posts.json";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  return posts.map(post => ({
    dateFile: post.dateFile,
  }));
}

const components = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return <a {...props} target="_blank" rel="noopener noreferrer" />;
  },
};

export default function BlogPostPage({
  params,
}: {
  params: { dateFile: string };
}) {
  const post = posts.find(p => p.dateFile === params.dateFile);

  if (!post) {
    return <p className="text-2xl">Article not found.</p>;
  }

  const fullContent = `# ${post.title}\n\n**${post.displayDate}**\n\n${post.content}`;

  return (
    <main className="max-w-3xl mx-auto p-4">
      <article className="prose prose-lg prose-business text-justify">
        <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
          {fullContent}
        </ReactMarkdown>
      </article>
    </main>
  );
}
