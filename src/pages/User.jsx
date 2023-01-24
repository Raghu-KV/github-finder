import RepoLists from "../components/RepoLists";
import { useContext, useEffect } from "react";
import { githubContext } from "../context/GithubProvider";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaCodepen, FaUserFriends, FaUsers } from "react-icons/fa";

function User() {
  const { singleUser, fetchSingleUser, isLoading, repos, fetchRepos } =
    useContext(githubContext);
  const params = useParams();

  useEffect(() => {
    fetchSingleUser(params.login);
    fetchRepos(params.login);
  }, []);

  const {
    name,
    type,
    avatar_url,
    location,
    blog,
    bio,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_repos,
    hireable,
  } = singleUser;

  if (isLoading) {
    return (
      <progress className="progress progress-success w-1/3 mx-auto block"></progress>
    );
  } else {
    return (
      <>
        <div className="w-full mx-auto lg:w-10/12">
          <div className="mb-4">
            <Link to="/" className="btn btn-ghost">
              Back to search
            </Link>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-5 md:gap-5">
            <div className="custom-card-image mb-6 md:mb-0">
              <div className=" card image-full">
                <figure>
                  <img src={avatar_url} alt="avatar" />
                </figure>
                <div className="card-body text-white mt-auto">
                  <h2 className="card-title mb-0 text-white">{name}</h2>
                  <p className="text-white">{login}</p>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <div className="mb-6">
                <h1 className="text-3xl card-title text-white">
                  {name}
                  <div className="ml-2 mr-1 badge badge-success">{type}</div>
                  {hireable && (
                    <div className="mx-1 badge badge-info">Hireable</div>
                  )}
                </h1>
                <p>{bio}</p>
                <div className="mt-4 card-actions">
                  <a
                    href={html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-success"
                  >
                    Visit github profile
                  </a>
                </div>
              </div>
              <div className="w-full rounded-lg stats">
                {location && (
                  <div className="stat">
                    <div className="stat-title text-md text-white">
                      Location
                    </div>
                    <div className="text-lg stat-value text-white">
                      {location}
                    </div>
                  </div>
                )}
                {blog && (
                  <div className="stat">
                    <div className="stat-title text-md text-white">
                      Websight
                    </div>
                    <div className="text-lg stat-value text-white">
                      <a href={`${blog}`} target="_blank" rel="norferrer">
                        {blog}
                      </a>
                    </div>
                  </div>
                )}
                {twitter_username && (
                  <div className="stat">
                    <div className="stat-title text-md text-white">Twitter</div>
                    <div className="text-lg stat-value text-white">
                      <a
                        href={`https://twitter.com/${twitter_username}`}
                        target="_blank"
                        rel="norferrer"
                      >
                        {twitter_username}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="w-full py-5 rounded-lg stats">
            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUsers className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Followlers</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {followers}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaUserFriends className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Following</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {following}
              </div>
            </div>

            <div className="stat">
              <div className="stat-figure text-secondary">
                <FaCodepen className="text-3xl md:text-5xl" />
              </div>
              <div className="stat-title pr-5">Public repos</div>
              <div className="stat-value pr-5 text-3xl md:text-4xl">
                {public_repos}
              </div>
            </div>
          </div>
          <RepoLists repos={repos} />
        </div>
      </>
    );
  }
}

export default User;
