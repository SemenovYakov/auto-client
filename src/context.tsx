import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import React, { createContext } from "react";

interface initialState {
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
}

const initial: initialState = {
  setShowModal: () => undefined,
  showModal: false,
};

const Context = createContext(initial);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const value = { showModal, setShowModal };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGlobalContext = () => useContext(Context);
