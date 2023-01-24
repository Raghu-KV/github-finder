import { useNavigate } from "react-router-dom";
function UserItem({ user }) {
  const navigate = useNavigate();
  return (
    <div
      className="card card-side  bg-neutral cursor-pointer hover:scale-105 transition-all"
      onClick={() => navigate(`/user/${user.login}`)}
    >
      <figure className="w-24">
        <img src={user.avatar_url} alt="Movie" />
      </figure>
      <div className="card-body justify-center text-white">
        <h2 className="card-title">{user.login}</h2>
      </div>
    </div>
  );
}

export default UserItem;
