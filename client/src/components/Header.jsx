import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gray-300 shadow-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4 font-semibold font-serif">
        <Link to="/">
          <h1 className="font-bold text:sm sm:text-3xl flex flex-wrap">
            <span className="text-gray-800 ">3amer</span>
            <span className="text-gray-500">Estates</span>
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-t-lg flex items-center">
          <input
            type="text"
            placeholder="Search .. "
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          ></input>
          <FaSearch />
        </form>
        <ul className="flex gap-4 ">
          <Link to="/">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to="/sign-up">
            <li className=" text-slate-700 hover:underline">Sign up</li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
