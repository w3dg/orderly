import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-screen justify-center gap-4 items-center flex-col">
      <h2 className="text-2xl font-bold">404 Not found</h2>
      <p>Oops! That page doesn't exist</p>
      <Link href={"/"} className="text-blue-500 hover:text-blue-600">
        Go back to the homepage
      </Link>
    </main>
  );
};

export default NotFound;
