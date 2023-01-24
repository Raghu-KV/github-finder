import { createContext, useReducer } from "react";
import githubReducer from "./GithubReducer";
import { useNavigate } from "react-router-dom";

export const githubContext = createContext();

export function GithubProvider({ children }) {
  const navigate = useNavigate();
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoadind] = useState(true);
  const initialState = {
    users: [],
    repos: [],
    singleUser: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // for testing Purposes--------------------------------------------------------------
  const fetchUsers = async (text) => {
    setLoadingTrue();
    const responce = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/search/users?q=${text}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_MY_API_TOKEN}`,
        },
      }
    );
    const { items } = await responce.json();
    // setUsers(data);
    // setIsLoadind(false);

    dispatch({
      type: "GET_USERS",
      payload: items,
    });

    //console.log(data);
  };

  // get single user function-------------------------------------------------------------
  const fetchSingleUser = async (login) => {
    setLoadingTrue();
    const responce = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${login}`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_MY_API_TOKEN}`,
        },
      }
    );

    if (responce.status === 404) {
      navigate("/notfound");
      dispatch({
        type: "FALSE_LOADING",
      });
    } else {
      const data = await responce.json();
      //console.log(data);
      dispatch({
        type: "GET_SINGLE_USER",
        payload: data,
      });
    }
  };
  // fetch single user end -----------------------------------------------------

  // fetch repos ---------------------------------------------------------------

  const fetchRepos = async (userName) => {
    setLoadingTrue();
    const responce = await fetch(
      `${process.env.REACT_APP_GITHUB_URL}/users/${userName}/repos?sort=created&per_page=10`,
      {
        headers: {
          Authorization: `token ${process.env.REACT_APP_MY_API_TOKEN}`,
        },
      }
    );

    if (responce.status === 404) {
      dispatch({
        type: "FALSE_LOADING",
      });
    } else {
      const data = await responce.json();
      //console.log(data);
      dispatch({
        type: "GET_REPOS",
        payload: data,
      });
    }
  };

  // fetch repo ends -----------------------------------------------------------

  const setLoadingTrue = () => {
    dispatch({
      type: "SET_LOADING",
    });
  };

  const clearUsers = () => {
    dispatch({
      type: "CLEAR_USERS",
    });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        isLoading: state.loading,
        singleUser: state.singleUser,
        repos: state.repos,
        fetchUsers,
        fetchSingleUser,
        clearUsers,
        fetchRepos,
      }}
    >
      {children}
    </githubContext.Provider>
  );
}
