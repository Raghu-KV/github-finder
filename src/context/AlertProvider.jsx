import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

export const alertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set alert function
  const setAlert = (message) => {
    dispatch({
      type: "SET_ALERT",
      payload: message,
    });

    setTimeout(() => {
      dispatch({
        type: "REMOVE_ALERT",
      });
    }, 3000);
  };

  return (
    <alertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </alertContext.Provider>
  );
};
