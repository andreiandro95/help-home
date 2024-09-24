"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOutBtn = () => {
  return (
    <button onClick={() => signOut({ callbackUrl: "/" })}>Sign out</button>
  );
};

export default SignOutBtn;
