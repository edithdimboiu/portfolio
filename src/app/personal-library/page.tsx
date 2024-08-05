import Link from "next/link";
import Carousel from "../components/Carousel";

const slides: { id: string; src: string; type: "image" | "video" }[] = [
  { id: "slide1", src: "/assets/slide1.jpg", type: "image" },
  { id: "slide2", src: "/assets/slide2.jpg", type: "image" },
  { id: "slide3", src: "/assets/slide3.jpg", type: "image" },
  { id: "slide4", src: "/videos/personal-library.mov", type: "video" },
];

const MyLibraryProject: React.FC = () => {
  return (
    <div className="custom-heading">
      <header className="flex my-8 justify-between flex-col md:flex-row gap-y-8 items-center">
        <h2 className="text-2xl md:text-3xl">Personal Library</h2>
        <ul className="inline-flex gap-4">
          <li>
            <Link href="https://personal-library.edith.info" target="_blank" rel="noopener noreferrer">
              {" "}
              <button className="btn btn-primary">Live Demo</button>
            </Link>
          </li>
          <li>
            <Link href="https://github.com/edithdimboiu/PersonalLibrary.git" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-secondary">Code</button>
            </Link>{" "}
          </li>
        </ul>
      </header>

      <section>
        <Carousel slides={slides} />
      </section>

      <main>
        <section>
          <h3>How it all started</h3>
          <p>The PersonalLibrary app was designed for readers who want to track their reading habits and enjoy detailed statistics about their collections.</p>
        </section>

        <section>
          <h3>Features</h3>
          <p>This web-based app enables users to search for books and add them to their online libraries, helping them keep track of their purchases and avoid buying duplicate titles.</p>
        </section>

        <section>
          <h3>User Interaction</h3>
          <p>Readers can mark books as read or unread, with the app generating insightful statistics, including the number of books and pages read, as well as the total amount spent on books.</p>
        </section>

        <section>
          <h3>Data and Accuracy</h3>
          <p>By utilizing data from the Google Books API, MyLibrary ensures that users have access to accurate and up-to-date information.</p>
        </section>

        <section>
          <h3>Technologies/Frameworks/Libraries</h3>
          <ul>
            <li>Javascript</li>
            <li>ReactJS</li>
            <li>React Testing Library</li>
            <li>Jest</li>
            <li>Git</li>
          </ul>
        </section>

        <section>
          <h3>Challenges and Solutions</h3>
          <p>
            One of the biggest challenges I faced in this project was state management. Initially, I managed state directly within individual components, but as the application became more complex, I realized that this approach was not scalable and led to difficult to maintain code. Next, I tried a
            "lifting state up" approach, centralizing state in parent components and passing data through props. While this improved state management to some extent, it introduced additional complexity and made the code structure hard to follow. Ultimately, I decided to implement React's Context API
            to handle global state management. This allowed me to efficiently share data and functionalities between components while keeping the code clean and organized. My solution was the following:
          </p>
        </section>

        <section>
          <h3>Future Improvements</h3>
          <p>As the PersonalLibrary App was designed as a frontend app, the data is saved into localstorage. As a future improvement, I would consider creating user accounts and saving the data into a database.</p>
        </section>
      </main>
    </div>
  );
};
export default MyLibraryProject;
