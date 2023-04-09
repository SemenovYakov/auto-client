import { Services } from "@/pages/services";
import axios from "axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import React, { createContext } from "react";
export interface User {
  id: number;
  name: string;
  surname: string;
  phone: number;
  password: string;
}
interface initialState {
  service: Services | null;
  logout: () => void;
  mistake: boolean;
  setMistake: Dispatch<SetStateAction<boolean>>;
  registration: ({ data }: any) => Promise<void>;
  login: ({ data }: any) => Promise<void>;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  showModal: boolean;
  setService: Dispatch<SetStateAction<Services | null>>;
}

const initial = {} as initialState;

const Context = createContext(initial);

export const ContextProvider = ({ children }: { children: ReactNode }) => {
  const login = async (data: any) => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "https://autoservice-production.up.railway.app/auth/login",
        data,
        {
          headers: headers,
        }
      );
      if (res) {
        setUser(res.data);
        setMistake(false);
        setShowModal(false);
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    } catch (err) {
      setMistake(true);
    }
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const registration = async (data: any) => {
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const res = await axios.post(
        "https://autoservice-production.up.railway.app/auth/registration",
        data,
        {
          headers: headers,
        }
      );
      if (res) {
        setUser(res.data);
        setMistake(false);
        setShowModal(false);
        localStorage.setItem("user", JSON.stringify(res.data));
      }
    } catch (err) {
      setMistake(true);
    }
  };

  const [showModal, setShowModal] = useState<boolean>(false);
  const [mistake, setMistake] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  const [service, setService] = useState<Services | null>(null);
  const value = {
    service,
    setService,
    user,
    setUser,
    showModal,
    setShowModal,
    login,
    mistake,
    setMistake,
    registration,
    logout,
  };

  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export const useGlobalContext = () => useContext(Context);
