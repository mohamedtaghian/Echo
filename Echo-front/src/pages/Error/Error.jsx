import { Link } from "react-router-dom";

function Error() {
  return (
    <section className="relative flex justify-center items-center bg-black/90 mx-auto px-4 lg:px-6 py-8 lg:py-16 min-h-screen">
      <div className="text-center">
        <h1 className="mb-4 font-extrabold text-red-400 text-7xl lg:text-9xl tracking-tight">
          404
        </h1>
        <p className="mb-4 font-bold text-white text-3xl md:text-4xl tracking-tight">
          Something's missing.
        </p>
        <p className="mb-4 font-light text-gray-400 text-lg">
          Sorry, we can't find that page. You'll find lots to explore on the
          home page.
        </p>
        <Link
          to={"/"}
          className="inline-flex bg-white/10 hover:bg-white my-4 px-5 py-2.5 rounded-lg focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 font-medium text-white hover:text-black text-sm text-center transition-colors duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
}

export default Error;
