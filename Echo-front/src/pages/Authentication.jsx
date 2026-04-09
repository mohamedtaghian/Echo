function Authentication() {
  const state = "login";

  return (
    <section className="flex justify-center items-center bg-black/90 min-h-screen">
      <form className="bg-white/10 shadow-2xl backdrop-blur-lg px-8 border border-white/20 rounded-2xl w-full sm:w-87.5 text-center">
        <h1 className="mt-10 font-medium text-white text-3xl">Login</h1>

        <p className="mt-2 text-gray-400 text-sm">Please sign in to continue</p>

        {state !== "login" && (
          <div className="flex items-center gap-2 bg-white/5 mt-6 pl-6 rounded-full ring-2 ring-white/10 focus-within:ring-indigo-500/60 w-full h-12 overflow-hidden transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              className="text-white/60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {" "}
              <circle cx="12" cy="8" r="5" />
              <path d="M20 21a8 8 0 0 0-16 0" />
            </svg>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="bg-transparent border-none outline-none w-full text-white placeholder-white/60"
            />
          </div>
        )}

        <div className="flex items-center gap-2 bg-white/5 mt-4 pl-6 rounded-full ring-2 ring-white/10 focus-within:ring-indigo-500/60 w-full h-12 overflow-hidden transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
            <rect x="2" y="4" width="20" height="16" rx="2" />
          </svg>
          <input
            type="email"
            name="email"
            placeholder="Email id"
            className="bg-transparent border-none outline-none w-full text-white placeholder-white/60"
            required
          />
        </div>

        <div className="flex items-center gap-2 bg-white/5 mt-4 pl-6 rounded-full ring-2 ring-white/10 focus-within:ring-indigo-500/60 w-full h-12 overflow-hidden transition-all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            className="text-white/75"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="bg-transparent border-none outline-none w-full text-white placeholder-white/60"
            required
          />
        </div>

        <div className="mt-4 text-left">
          <button className="text-indigo-400 text-sm hover:underline">
            Forget password?
          </button>
        </div>

        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-500 mt-2 rounded-full w-full h-11 text-white transition"
        >
          {state === "login" ? "Login" : "Sign up"}
        </button>

        <p className="mt-3 mb-11 text-gray-400 text-sm cursor-pointer">
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}
          <span className="ml-1 text-indigo-400 hover:underline">
            click here
          </span>
        </p>
      </form>
      <div className="-z-1 fixed inset-0 pointer-events-none">
        <div className="top-20 left-1/2 absolute bg-linear-to-tr from-indigo-800/35 to-transparent blur-3xl rounded-full w-245 h-115 -translate-x-1/2" />
        <div className="right-12 bottom-10 absolute bg-linear-to-bl from-indigo-700/35 to-transparent blur-2xl rounded-full w-105 h-55" />
      </div>
    </section>
  );
}

export default Authentication;
