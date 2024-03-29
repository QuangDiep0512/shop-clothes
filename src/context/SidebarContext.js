import React, { createContext, useState } from "react";

export const SidebarContext = createContext();
export const SidebarProvider = ({ children }) => {
  const [isClose, setIsClose] = useState(true);
  const toggleSidebar = () => {
    setIsClose(!isClose);
  };
  return (
    <SidebarContext.Provider value={{ isClose, setIsClose, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
