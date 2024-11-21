import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center bg-neutral-700 min-h-svh">
      <h1 className="text-4xl text-center font-myfont mt-8 mb-8">Error Page</h1>
      <img src="src/assets/images/logo.jpg" className="max-w-[300px] mb-8 hover:opacity-35" alt="logo genere avec dal-e" />
      <Link
        to="/"
        className="text-2xl font-myfontVariant text-blue-700 hover:text-blue-400 hover:opacity-85 duration-300"
      >
        Revenir a la homepage
      </Link>
    </div>
  );
}
