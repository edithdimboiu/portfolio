import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl mb-2 flex flex-col lg:flex-row w-full max-w-5xl">
          <figure className="w-full lg:w-3/5">
            <img src="/assets/no-picture.jpg" alt="No Picture available" className="object-cover h-full w-full" />
          </figure>
          <div className="card-body w-full lg:w-2/5 p-6">
            <h2 className="card-title text-2xl mb-4">Personal Library</h2>
            <p className="mb-4">The MyLibrary app is designed for readers who want to track their reading habits and enjoy detailed statistics about their collections.</p>
            <p className="mb-7">Readers can mark books as read or unread, with the app generating insightful statistics, including the number of books and pages read, as well as the total amount spent on books.</p>
            <div className="card-actions flex justify-evenly">
              <button className="btn btn-primary">Live Demo</button>
              <button className="btn btn-secondary">Code</button>
              <Link href="/personal-library-project">
                <button className="btn btn-accent">Case study</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl mb-2 flex flex-col lg:flex-row w-full max-w-5xl">
          <figure className="w-full lg:w-3/5">
            <img src="/assets/no-picture.jpg" alt="No Picture available" className="object-cover h-full w-full" />
          </figure>
          <div className="card-body w-full lg:w-2/5 p-6">
            <h2 className="card-title text-2xl mb-4">Personal Library</h2>
            <p className="mb-4">The MyLibrary app is designed for readers who want to track their reading habits and enjoy detailed statistics about their collections.</p>
            <p className="mb-7">Readers can mark books as read or unread, with the app generating insightful statistics, including the number of books and pages read, as well as the total amount spent on books.</p>
            <div className="card-actions flex justify-evenly">
              <button className="btn btn-primary">Live Demo</button>
              <button className="btn btn-secondary">Code</button>
              <Link href="/personal-library-project">
                <button className="btn btn-accent">Case study</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl mb-2 flex flex-col lg:flex-row w-full max-w-5xl">
          <figure className="w-full lg:w-3/5">
            <img src="/assets/no-picture.jpg" alt="No Picture available" className="object-cover h-full w-full" />
          </figure>
          <div className="card-body w-full lg:w-2/5 p-6">
            <h2 className="card-title text-2xl mb-4">Personal Library</h2>
            <p className="mb-4">The MyLibrary app is designed for readers who want to track their reading habits and enjoy detailed statistics about their collections.</p>
            <p className="mb-7">Readers can mark books as read or unread, with the app generating insightful statistics, including the number of books and pages read, as well as the total amount spent on books.</p>
            <div className="card-actions flex justify-evenly">
              <button className="btn btn-primary">Live Demo</button>
              <button className="btn btn-secondary">Code</button>
              <Link href="/personal-library-project">
                <button className="btn btn-accent">Case study</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Projects;
