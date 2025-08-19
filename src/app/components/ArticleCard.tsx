import Link from "next/link";
import React from "react";

interface ArticleCardProps {
  post: {
    id: number;
    title: string;
    date: string;
    summary: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ post }) => {
  const { id, title, date, summary } = post;

  return (
    <article className="card card-custom">
      <div className="card-body">
        <h3 className="card-title">{title}</h3>
        <p className="text-sm opacity-70">{date}</p>
        <p className="mt-2">{summary}</p>
        <div className="card-actions justify-end mt-4">
          <Link
            href={`/blog/${id}`}
            className="btn btn-outline btn-primary btn-sm"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default ArticleCard;
