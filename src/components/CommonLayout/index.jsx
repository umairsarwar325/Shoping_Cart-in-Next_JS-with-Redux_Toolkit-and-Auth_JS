import { auth } from "@/auth";
import ReduxStoreProvider from "@/ReduxStoreProvider";
import React from "react";

const CommonLayout = async ({ children }) => {
  const session = await auth();
  return <ReduxStoreProvider session={session}>{children}</ReduxStoreProvider>;
};

export default CommonLayout;
