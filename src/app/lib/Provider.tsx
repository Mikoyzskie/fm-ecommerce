"use client"

import React, { createContext, useContext, Dispatch, SetStateAction, useState, ReactNode } from "react";

interface Props {
  children: ReactNode
}

interface IProvider {
  sideMenu: boolean;
  setSideMenu: Dispatch<SetStateAction<boolean>>
  cartCount: number
  setCartCount: Dispatch<SetStateAction<number>>
}

const GlobalContext = createContext<IProvider>({
  sideMenu: false,
  setSideMenu: () => { },
  cartCount: 3,
  setCartCount: () => { }
})

export const GlobalContextProvider = ({ children }: Props) => {
  const [sideMenu, setSideMenu] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(3);

  return (
    <GlobalContext.Provider value={{ sideMenu, setSideMenu, cartCount, setCartCount }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => useContext(GlobalContext)