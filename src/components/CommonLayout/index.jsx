"use client";
import ReduxStoreProvider from "@/ReduxStoreProvider";
import React from "react";

const CommonLayout = ({ children }) => {
  return <ReduxStoreProvider>{children}</ReduxStoreProvider>;
};

export default CommonLayout;
