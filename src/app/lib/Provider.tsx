"use client"

import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface Props {
  children: ReactNode
}

interface IProvider {
  sideMenu: boolean;
  setSideMenu: Dispatch<SetStateAction<boolean>>
}

const GlobalContext = createContext<IProvider>({
  sideMenu: false,
  setSideMenu: () => { }
})

export const GlobalContextProvider = ({ children }: Props) => {
  const [sideMenu, setSideMenu] = useState<boolean>(false);

  return (
    <GlobalContext.Provider value={{ sideMenu, setSideMenu }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)