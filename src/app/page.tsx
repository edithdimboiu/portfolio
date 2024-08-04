import Link from "next/link";

export default function Home() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="max-w-max	">
          <h1 className="text-3xl font-bold mb-8">Hey there!</h1>
          <p className="py-6 text-l md:text-2xl tracking-wide">
            I'm Edith, a passionate Fronted Web Developer, who currently lives in Switzerland. After building my career in accounting and taxes I decided to face another challenge and switch careers to Frontend Web Development. <br></br> <br></br>I always loved solving problems and optimising, so I
            feel that it fits me like a glove. I am open to new challenges and opportunities. Below you can see some of my projects and if you find something catchy please feel free to contact/follow me on{" "}
            <Link className="text-primary" href="https://linkedin.com/in/edith-dimboiu-1670b869" target="_blank" rel="noopener noreferrer">
              Linkedin
            </Link>{" "}
            or{" "}
            <Link className="text-primary" href="https://github.com/edithdimboiu" target="_blank" rel="noopener noreferrer">
              Github
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
