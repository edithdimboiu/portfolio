import Link from "next/link";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav
      className="pt-2  mx-auto w-full fixed mt-0  z-2 bg-base-100
 top-0"
    >
      <div className="navbar px-8  mx-auto flex-row place-content-between">
        <Link href="/" className="">
          <h1 className="lg:text-5xl  text-3xl">Edith Dimboiu</h1>
        </Link>
        <SocialLinks />
      </div>
      <div className="divider divider-primary my-0"></div>
      <div className="divider divider-secondary my-0"></div>
      <div className="divider divider-accent my-0"></div>
    </nav>
  );
};
export default Navbar;
