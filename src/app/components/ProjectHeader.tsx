import React from "react";
import Link from "next/link";

interface LinkItem {
  href: string;
  buttonClass: string;
  text: string;
}

interface HeaderProps {
  title: string;
  links: LinkItem[];
}

const Header: React.FC<HeaderProps> = ({ title, links }) => {
  return (
    <header className="flex my-8 justify-between flex-col md:flex-row gap-y-8 items-center">
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      <ul className="inline-flex gap-4">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} target="_blank" rel="noopener noreferrer">
              <button className={link.buttonClass}>{link.text}</button>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
