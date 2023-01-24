import RepoItem from "./RepoItem";

function RepoLists({ repos }) {
  return (
    <div className="rounded-lg card ">
      <div className="card-body">
        <h2 className="text-3xl my-4 card-title font-bold">Repositories</h2>
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  );
}

export default RepoLists;
