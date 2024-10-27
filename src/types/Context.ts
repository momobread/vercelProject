import { type ReactNode } from "react";

export interface UserContextType {
  id: string;
  password: string;
  isLogined: boolean;
  dispatch: (action: reducerActionType) => void;
}

export interface initialStateType {
  id: string;
  password: string;
  isLogined: boolean;
}

export type reducerActionType =
  | { type: "id"; id: string }
  | { type: "password"; password: string }
  | { type: "isLogined"; isLogined: boolean };

export interface UserContextProviderType {
  children: ReactNode;
}
