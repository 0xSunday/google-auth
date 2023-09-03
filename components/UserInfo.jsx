"use client";
import React from "react";
import SignIn from "./SignIn";
import { useSession } from "next-auth/react";

const UserInfo = () => {
  const { status } = useSession();
  if (status === "authenticated") {
    return <h1>user data</h1>;
  } else {
    return <SignIn />;
  }
};

export default UserInfo;
