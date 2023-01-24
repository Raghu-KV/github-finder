import { useContext } from "react";
import { alertContext } from "../context/AlertProvider";

function Alert() {
  const { alert } = useContext(alertContext);

  return (
    alert !== null && (
      <div>
        <h1 className="text-red-500">{alert}</h1>
      </div>
    )
  );
}

// function Alert() {
//   return <p>Aler</p>;
// }

export default Alert;
