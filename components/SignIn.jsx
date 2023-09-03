"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

import React from "react";
const SignIn = () => {
  
  return (
    <button
      onClick={() => signIn()}
      className="flex items-center gap-4 shadow-xl rounded-lg pl-3"
    >
      <Image src="/logo.png" height={40} width={40} />

      <span className="bg-blue-500 text-white px-4 py-3">
        Sign in with Google
      </span>
    </button>
  );
};

export default SignIn;
