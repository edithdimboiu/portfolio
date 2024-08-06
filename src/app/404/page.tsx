import Link from "next/link";

const Custom404: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404 - Page not found</h1>
      <p className="text-lg mb-6">We are sorry, but the page you are looking for does not exist</p>
      <Link href="/">
        <button className="px-4 py-2 text-white bg-primary rounded">Go to homepage</button>
      </Link>
    </div>
  );
};

export default Custom404;
