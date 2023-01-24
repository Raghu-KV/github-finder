import { useContext } from "react";
import UserItem from "./UserItem";
import { githubContext } from "../context/GithubProvider";

function SerchResult() {
  const { users, isLoading } = useContext(githubContext);

  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoadind] = useState(true);

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // const fetchUsers = async () => {
  //   const responce = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${process.env.REACT_APP_MY_API_TOKEN}`,
  //     },
  //   });
  //   const data = await responce.json();
  //   setUsers(data);
  //   setIsLoadind(false);
  //   console.log(data);
  // };

  if (!isLoading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return (
      <progress className="progress progress-success w-1/3 mx-auto block"></progress>
    );
  }
}

export default SerchResult;
