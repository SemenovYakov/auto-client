import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";
import React, { createContext } from "react";



const GlobalModalsContext = createContext(initial);

export const GlobalModalsProvider = ({ children }: { children: ReactNode }) => {

  const [showSpecialCase, setshowSpecialCase] = useState<boolean>(false);
  const [showAuthentication, setShowAuthentication] = useState<boolean>(false);

  const value: Record<modalsNames, modalProps> = {
    personalManager: {
      show: showPersonalManager,
      setShow: setShowPersonalManager,
    },
    specialCase: {
      show: showSpecialCase,
      setShow: setshowSpecialCase,
    },
    authentication: {
      show: showAuthentication,
      setShow: setShowAuthentication,
    },
  };

  return (
    <GlobalModalsContext.Provider value={value}>
      {children}
    </GlobalModalsContext.Provider>
  );
};

export const useGlobalModalsContext = () => useContext(GlobalModalsContext);
