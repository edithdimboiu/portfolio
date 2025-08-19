import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CardProps {
  title: string;
  imageSource: string;
  description: string;
  demoLink: string;
  githubLink: string;
  caseStudyLink: string;
}

const Card: React.FC<CardProps> = ({
  title,
  imageSource,
  description,
  demoLink,
  githubLink,
  caseStudyLink,
}) => (
  <div className={`flex justify-center pt-12`}>
    <div
      className="card lg:card-side card-custom w-full max-w-7xl mb-2 flex flex-col items-start justify-start 
        "
    >
      <figure className="w-full lg:w-3/5">
        <Image
          src={imageSource}
          alt="No Picture available"
          width={700}
          height={450}
          priority
          className="object-cover w-full h-full"
        />
      </figure>
      <div className="card-body w-full lg:w-2/5 sm:p-6 px-4 leading-7 lg:min-h-[25rem]">
        <h2 className="card-title text-2xl mb-4">{title}</h2>
        <p className="mb-12">{description}</p>
        <div className="card-actions flex justify-evenly">
          <Link
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Live demo for ${title}`}
          >
            <button className="btn btn-primary">Live Demo</button>
          </Link>
          <Link
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`GitHub repository for ${title}`}
          >
            <button className="btn btn-secondary">Code</button>
          </Link>
          <Link href={caseStudyLink}>
            <button className="btn btn-accent">Case study</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
