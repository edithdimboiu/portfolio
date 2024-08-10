import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="footer
    text-neutral-content p-4 grid-auto-flow-column xs: grid-auto-flow-row  gap-y-4   items-center fixed bottom-0 bg-orange-50"
    >
      <aside className="justify-self-center md:justify-self-start">
        <p className="text-2lg">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>
      <nav className="grid-flow-col  items-center justify-self-center md:justify-self-end">
        <Link
          href="https://linkedin.com/in/edith-dimboiu-1670b869"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="linkedin-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M19 0h-14c-2.75 0-5 2.25-5 5v14c0 2.75 2.25 5 5 5h14c2.75 0 5-2.25 5-5v-14c0-2.75-2.25-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.13c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.13h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.37h.04c.4-.74 1.38-1.52 2.85-1.52 3.05 0 3.62 2 3.62 4.59v5.56z"></path>
          </svg>
        </Link>
        <Link
          href="https://github.com/edithdimboiu"
          target="_blank"
          rel="noopener noreferrer"
          data-testid="github-link"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            className="fill-current"
          >
            <path d="M12 .5c-6.62 0-12 5.38-12 12 0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.57v-2.07c-3.34.73-4.04-1.39-4.04-1.39-.54-1.37-1.31-1.74-1.31-1.74-1.07-.73.08-.72.08-.72 1.18.08 1.8 1.21 1.8 1.21 1.06 1.81 2.78 1.29 3.45.99.11-.77.41-1.29.75-1.58-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.22.96-.27 1.98-.4 3-.41 1.02.01 2.04.14 3 .41 2.29-1.54 3.3-1.22 3.3-1.22.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.62-2.81 5.64-5.49 5.93.42.37.8 1.1.8 2.22v3.29c0 .31.21.68.82.57 4.77-1.59 8.21-6.09 8.21-11.39 0-6.62-5.38-12-12-12z"></path>
          </svg>
        </Link>
      </nav>
    </footer>
  );
};
export default Footer;
