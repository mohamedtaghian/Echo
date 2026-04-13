import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider/AuthProvider";

function NavBar() {
  const { user, handleLogout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <nav className="relative flex max-md:justify-between items-center bg-transparent backdrop-blur-3xl md:mx-4 px-6 py-4 border border-white/10 rounded-full max-md:w-full text-white text-sm">
      <Link className="font-bold text-xl uppercase tracking-wider" to={"/"}>
        Echo
      </Link>

      <div className="hidden md:flex flex-1 justify-end items-center gap-6 ml-7">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `group relative h-6 overflow-hidden transition-all ${isActive ? "text-white" : "text-slate-400"}`
          }
        >
          <span className="block transition-transform group-hover:-translate-y-full duration-300">
            Home
          </span>
          <span className="block top-full left-0 absolute transition-transform group-hover:-translate-y-full duration-300">
            Home
          </span>
        </NavLink>
      </div>

      <div className="hidden md:flex items-center gap-4 ml-14">
        {user && <span className="font-semibold text-sm">Hi {user?.name}</span>}
        {user ? (
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="bg-transparent hover:bg-red-600 shadow-none hover:shadow-[0px_0px_20px_2px_rgba(220,38,38,0.3)] px-4 py-2 border border-slate-700 hover:border-red-600 rounded-full font-medium text-red-400 hover:text-white text-sm transition-all duration-300 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth"}
            className="bg-white hover:bg-slate-100 shadow-[0px_0px_30px_7px] shadow-white/50 hover:shadow-[0px_0px_30px_14px] hover:shadow-white/50 px-4 py-2 rounded-full font-medium text-black text-sm transition duration-300"
          >
            Login / Register
          </Link>
        )}
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden focus:outline-none text-white cursor-pointer"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } absolute top-20 left-0 flex-col items-center gap-6 bg-black/90 backdrop-blur-xl w-full py-8 border border-white/10 rounded-2xl z-50 transition-all duration-300`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)}
          className="hover:pl-3 transition-all duration-300"
        >
          Home
        </NavLink>
        {user ? (
          <button
            onClick={() => {
              handleLogout();
              setIsOpen(false);
            }}
            className="bg-transparent hover:bg-red-600 shadow-none hover:shadow-[0px_0px_20px_2px_rgba(220,38,38,0.3)] px-4 py-2 border border-slate-700 hover:border-red-600 rounded-full font-medium text-red-400 hover:text-white text-sm transition-all duration-300 cursor-pointer"
          >
            Logout
          </button>
        ) : (
          <Link
            to={"/auth"}
            onClick={() => setIsOpen(false)}
            className="bg-white hover:bg-slate-100 shadow-[0px_0px_30px_7px] shadow-white/50 hover:shadow-[0px_0px_30px_14px] hover:shadow-white/50 px-4 py-2 rounded-full font-medium text-black text-sm transition duration-300"
          >
            Login / Register
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
