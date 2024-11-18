import React, { createContext, ReactNode, useState } from "react";

interface InitContextType {
  hasNotInit: boolean;
  setHasNotInit: React.Dispatch<React.SetStateAction<boolean>>;
}

export const InitStateContext = createContext<InitContextType>({
  hasNotInit: true,
  setHasNotInit: () => {},
});

interface InitProps {
  children: ReactNode;
}

const Init: React.FC<InitProps> = ({ children }) => {
  const [hasNotInit, setHasNotInit] = useState<boolean>(true);

  return (
    <InitStateContext.Provider value={{ hasNotInit, setHasNotInit }}>
      {children}
    </InitStateContext.Provider>
  );
};

export default Init;
