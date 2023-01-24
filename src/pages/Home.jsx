import SerchResult from "../components/SerchResult";
import UserSerch from "../components/UserSerch";
import Alert from "../components/Alert";

function Home() {
  return (
    <div>
      <UserSerch />
      <Alert />
      <SerchResult />
    </div>
  );
}

export default Home;
