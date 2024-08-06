import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      <HeroSection />
    </div>
  );
}

const HeroSection = () => (
  <div className="hero-content">
    <div className="max-w-max">
      <h1 className="text-3xl font-bold mb-8">Hey there!</h1>
      <p className="py-6 text-l md:text-2xl tracking-wide">
        I'm Edith, a passionate Fronted Web Developer living in Switzerland.
        After a career in accounting and taxes, I transitioned to Frontend Web
        Development. I enjoy solving problems and optimizing solutions. I'm open
        to new challenges and opportunities.{" "}
        <Link className="text-primary" href="/projects">
          Here
        </Link>{" "}
        you can see some of my projects, and if you find something interesting,
        feel free to contact or follow me on{" "}
        <Link
          className="text-primary"
          href="https://linkedin.com/in/edith-dimboiu-1670b869"
          target="_blank"
          rel="noopener noreferrer"
        >
          Linkedin
        </Link>{" "}
        or{" "}
        <Link
          className="text-primary"
          href="https://github.com/edithdimboiu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Link>
        .
      </p>
    </div>
  </div>
);
