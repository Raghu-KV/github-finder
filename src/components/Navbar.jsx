import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar mb-12 bg-neutral">
      <div className="container mx-auto flex">
        <div
          className="flex justify-center cursor-pointer"
          onClick={() => navigate("/")}
        >
          <FaGithub className="text-3xl inline mr-3" color="white" />
          <h2 className="font-bold text-lg text-white">Github Finder</h2>
        </div>
        <div className="ml-auto ">
          <Link to="/about">
            <button className="btn btn-ghost">How it works?</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
