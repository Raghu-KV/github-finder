import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
function About() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-white">Github finder project</h1>
      <p className="mt-2">
        this project uses git hub API to find users in github and check their
        latest repos
      </p>
      <Link to={"/"} className="text-white font-bold inline-block mt-5">
        {" "}
        <FaArrowLeft className="inline-block mr-2" />
        Back to Home
      </Link>
    </div>
  );
}

export default About;
