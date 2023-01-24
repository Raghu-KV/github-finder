import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold text-white"> Oops! </h1>
      <p className="text-xl py-8"> 404 - page not found</p>
      <Link
        to={"/"}
        className="btn btn-active btn-primary secondary btn-wide text-white"
      >
        {" "}
        Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
