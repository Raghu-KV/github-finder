import { useState, useContext } from "react";
import { githubContext } from "../context/GithubProvider";
import { alertContext } from "../context/AlertProvider";

function UserSerch() {
  const { users, fetchUsers, clearUsers } = useContext(githubContext);
  const { setAlert } = useContext(alertContext);

  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text === "") {
      setAlert("❌ Please Enter a valid search");
    } else {
      //API call for serch
      fetchUsers(text);
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-5 mb-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control relative">
            <input
              type="text"
              placeholder="Serch user"
              className="input input-bordered input-accent w-full"
              value={text}
              onChange={handleChange}
            />
            <button
              className="btn btn-accent absolute top-0 right-0"
              type="submit"
            >
              Serch Users
            </button>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div>
          <button className="btn btn-secondary" onClick={clearUsers}>
            Clear
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSerch;
