import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
  id: JSON.parse(localStorage.getItem("id")) || null,
};

export const AppContext = createContext(INITIAL_STATE);

const AppReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_ID":
      return {
        id: action.payload,
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);

  useEffect(() => {
    localStorage.setItem("id", JSON.stringify(state.id));
  }, [state.id]);

  return (
    <AppContext.Provider
      value={{
        id: state.id,
        dispatch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
