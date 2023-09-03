"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const Nav = () => {
  const { status } = useSession();
  return (
    <div className="p-4 flex justify-between items-center shadow-md">
      <div className="font-bold text-3xl text-blue-700">Logo</div>
      <div>
        {status === "authenticated" ? (
          <button
            onClick={signOut()}
            className="bg-slate-900 text-white px-6 py-2 rounded-md"
          >
            sign out
          </button>
        ) : (
          <button
            onClick={signIn("google")}
            className="bg-slate-900 text-white px-6 py-2 rounded-md"
          >
            sign out
          </button>
        )}
      </div>
    </div>
  );
};

export default Nav;
