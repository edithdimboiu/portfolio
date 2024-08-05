import Link from "next/link";
import Carousel from "../components/Carousel";

const slides: { id: string; src: string; type: "image" | "video" }[] = [
  { id: "slide1", src: "/assets/slide4.jpg", type: "image" },
  { id: "slide2", src: "/assets/slide5.jpg", type: "image" },
  { id: "slide3", src: "/assets/slide6.jpg", type: "image" },
  { id: "slide4", src: "/videos/portfolio.mov", type: "video" },
];

const PortfolioProject: React.FC = () => {
  return (
    <div className="custom-heading">
      <header className="flex my-8 justify-between flex-col md:flex-row gap-y-8 items-center">
        <h2 className="text-2xl md:text-3xl">Portfolio</h2>
        <ul className="inline-flex gap-4">
          <Link href="https://github.com/edithdimboiu/portfolio.git" target="_blank" rel="noopener noreferrer">
            <button className="btn btn-secondary">Code</button>
          </Link>
        </ul>
      </header>

      <section>
        <Carousel slides={slides} />
      </section>

      <main>
        <section>
          <h3>How it all started</h3>
          <p>The portfolio app was created to showcase my skills and projects as a frontend developer. It serves as a playground for experimenting with new technologies and frameworks, specifically Next.js, and TypeScript.</p>
        </section>

        <section>
          <h3>Features</h3>
          <p>This web-based portfolio app presents my projects, skills, and contact information in an organized and visually appealing manner. It demonstrates responsive design principles and modern frontend development techniques.</p>
          <p>Users can browse through my projects, read detailed descriptions, and view pictures/videos in order to understand better how the apps work.</p>
        </section>

        <section>
          <h3>Data and Accuracy</h3>
          <p>By leveraging Next.js, the app benefits from the file-based routing system, which simplifies navigation and enhances performance. The static site generation capabilities of Next.js ensure fast load times and an efficient user experience.</p>
        </section>

        <section>
          <h3>Technologies/Frameworks/Libraries</h3>
          <ul>
            <li>Typescript</li>
            <li>Next</li>
            <li>Tailwind</li>
            <li>DaisyUI</li>
            <li>React Testing Library</li>
            <li>Jest</li>
            <li>Git</li>
          </ul>
        </section>

        <section>
          <h3>Challenges and Solutions</h3>
          <p>
            One significant challenge I faced was understanding Next.js's routing system and file structure. Initially, adapting to the file-based routing and learning how Next.js handles pages and dynamic routes took some time. However, by studying the documentation and building simple projects to
            practice, I gradually became comfortable with these concepts.
          </p>
        </section>

        <section>
          <h3>Future Improvements</h3>
          <p>Adding a blog section.</p>
        </section>
      </main>
    </div>
  );
};
export default PortfolioProject;
