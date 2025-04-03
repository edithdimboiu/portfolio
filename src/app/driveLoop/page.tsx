import ProjectHeader from "../components/ProjectHeader";
import Carousel from "../components/Carousel";

const slides: { id: string; src: string; type: "image" | "video" }[] = [
  { id: "slide1", src: "/assets/slide7.jpg", type: "image" },
  { id: "slide2", src: "/assets/slide8.jpg", type: "image" },
  { id: "slide3", src: "/assets/slide9.jpg", type: "image" },
  {
    id: "slide4",
    src: "https://res.cloudinary.com/driveloop/video/upload/v1743680177/driveLoop_hahmof.mov",
    type: "video",
  },
];
const links = [
  {
    href: "https://driveloop.vercel.app/",
    buttonClass: "btn btn-primary",
    text: "Live Demo",
  },
  {
    href: "https://github.com/edithdimboiu/driveloop.git",
    buttonClass: "btn btn-secondary",
    text: "Code",
  },
];

const DriveLoopProject: React.FC = () => {
  return (
    <div>
      <ProjectHeader title="DriveLoop App" links={links} />

      <section>
        <Carousel slides={slides} />
      </section>
      <PortfolioDescription />
    </div>
  );
};

const PortfolioDescription = () => {
  return (
    <main data-testid="description">
      <section>
        <h3>How it all started</h3>
        <p>
          The DriveLoop app was created to provide a platform for users to rent
          and manage a variety of cars. It allows car owners to list their
          vehicles, track bookings, and monitor earnings, while also offering
          users a seamless experience when searching for and renting cars. The
          project was built using Next.js to take advantage of its features like
          file-based routing, static generation, and server actions for handling
          backend logic.
        </p>
      </section>

      <section>
        <h3>Features</h3>
        <p>
          The DriveLoop app offers both car rental functionality for users and
          management tools for car owners. Users can search for cars, view car
          details, make bookings, and manage their reservations. Car owners can
          list their cars, edit details, track their earnings, and view the
          performance of their listings.
        </p>
        <p>
          The app also includes login and registration functionality, as well as
          a personalized dashboard for users to manage their rented cars and
          personal information.
        </p>
      </section>

      <section>
        <h3>Data and Accuracy</h3>
        <p>
          DriveLoop App ensures accurate data by integrating a MongoDB database
          using Mongoose for efficient data management. User details, car
          listings, and booking information are stored securely and updated in
          real-time. The use of Next.js server actions allows for smooth
          communication between the frontend and backend, ensuring a fast and
          responsive user experience.
        </p>
        <p>
          All car data, including availability and pricing, is dynamically
          fetched from the database to reflect the most up-to-date information.
          This also includes real-time updates to car owners' earnings based on
          bookings made through the app.
        </p>
      </section>

      <section>
        <h3>Technologies/Frameworks/Libraries</h3>
        <ul>
          <li>Next.js</li>
          <li>React</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>JWT Authentication</li>
          <li>Cloudinary (for image storage)</li>
          <li>Node.js</li>
          <li>Tailwind CSS</li>
        </ul>
      </section>

      <section>
        <h3>Challenges and Difficulties</h3>
        <p>
          One of the main challenges faced during the development of the
          Driveloop app was implementing server actions in Next.js, which
          allowed for better integration between the frontend and backend.
          Handling the dynamic interaction with the MongoDB database, especially
          with user authentication, car listings, and bookings, was also a
          complex task. The correlation between the frontend components (such as
          booking forms and car listings) and backend operations (such as
          fetching car data and updating user accounts) required careful
          planning and efficient data flow management.
        </p>
      </section>

      <section>
        <h3>Future Improvements</h3>
        <p>
          Future improvements for Driveloop include adding a review and rating
          system for both car owners and renters, allowing users to leave
          feedback after each rental. Additionally, integrating payment options,
          improving the search functionality, and adding advanced filtering for
          cars (by features, location, and availability) are some of the planned
          features.
        </p>
      </section>
    </main>
  );
};

export default DriveLoopProject;
