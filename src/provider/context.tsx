import * as React from "react";

// type Action =
//   | { type: "increment" }
//   | { type: "decrement" }
//   | { type: "SET_GENRES"; action: number[] };
// type Dispatch = (action: Action) => void;
// type State = { count: number; genre: number[] };
// type CountProviderProps = { children: React.ReactNode };

// export const CountStateContext = React.createContext<
//   { state: State; dispatch: Dispatch } | undefined
// >(undefined);

// function countReducer(state: State, action: Action) {
//   switch (action.type) {
//     case "increment": {
//       return { ...state, count: state.count + 1 };
//     }
//     case "SET_GENRES": {
//       return { ...state, genre: action };
//     }
//     default: {
//       throw new Error(`Unhandled action type: ${action.type}`);
//     }
//   }
// }

// const initialState: State = {
//   count: 0,
//   genre: [],
// };

// function CountProvider({ children }: CountProviderProps) {
//   const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
//     countReducer,
//     initialState
//   );

//   const value = { state, dispatch };
//   return (
//     <CountStateContext.Provider value={value}>
//       {children}
//     </CountStateContext.Provider>
//   );
// }

// function useCount() {
//   const context = React.useContext(CountStateContext);
//   if (context === undefined) {
//     throw new Error("useCount must be used within a CountProvider");
//   }
//   return context;
// }

// export { CountProvider, useCount };
