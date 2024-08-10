import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="pt-2  mx-auto w-full fixed mt-0  z-10 top-0 bg-orange-50">
      <div className="navbar px-8  mx-auto flex-row place-content-between">
        <Link href="/" className="">
          <h1 className="lg:text-8xl  text-6xl">ED</h1>
        </Link>
        <ul className="menu menu-horizontal justify-end md:ml-8">
          <li className="capitalize text-xl sm:text-2xl">
            <Link href="/projects">Portfolio</Link>
          </li>
        </ul>
      </div>
      <div className="divider divider-primary my-0"></div>
      <div className="divider divider-secondary my-0"></div>
      <div className="divider divider-accent my-0"></div>
    </nav>
  );
};
export default Navbar;
