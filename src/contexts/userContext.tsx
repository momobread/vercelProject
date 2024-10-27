import { createContext, useContext, useReducer } from "react";
import { initialStateType, reducerActionType, UserContextProviderType, UserContextType } from "../types/Context";

const UserContext = createContext<UserContextType | null>(null);

function reducer(state: initialStateType, action: reducerActionType): initialStateType {
  switch (action.type) {
    case "id":
      return { ...state, id: action.id };
    case "password":
      return { ...state, password: action.password };
    case "isLogined":
      return { ...state, isLogined: action.isLogined };
  }
  return { ...state };
}

const initialState: initialStateType = {
  password: "",
  id: "",
  isLogined: false,
};

function UserContextProvider({ children }: UserContextProviderType) {
  //   const [id, setId] = useState<string>("");
  //   const [password, setPassword] = useState<string>("");
  //   const [isLogined, setIsLogined] = useState<boolean>(false);
  const [{ password, id, isLogined }, dispatch] = useReducer(reducer, initialState);

  return <UserContext.Provider value={{ password, id, isLogined, dispatch }}>{children}</UserContext.Provider>;
}

export default function useUser() {
  const context = useContext(UserContext);
  if (context === null || context === undefined) throw new Error("컨텍스트를 잘못 썼어요");
  return context;
}

export { UserContextProvider };
