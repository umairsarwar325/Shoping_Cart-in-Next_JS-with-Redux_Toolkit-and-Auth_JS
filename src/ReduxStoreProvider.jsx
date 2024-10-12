"use client";
import React from "react";
import { Provider } from "react-redux";
import store from "@/store";
import Header from "./components/Header";

const reduxStoreProvider = ({ children, session }) => {
  return (
    <Provider store={store}>
      <Header session={session}/>
      {children}
    </Provider>
  );
};

export default reduxStoreProvider;
