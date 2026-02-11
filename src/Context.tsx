import { createContext, useReducer, ReactNode, Dispatch } from "react";

type StateType = {
  darkMode: boolean;
};

type ActionType = { type: "toggle" };

const initialState: StateType = { darkMode: false };

export const themeContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

const themeReducer = (state: StateType, action: ActionType): StateType => {
  switch (action.type) {
    case "toggle":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

export const ThemeProvider = (props: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
