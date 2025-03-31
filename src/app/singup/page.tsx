/* eslint-disable @next/next/no-img-element */
"use client";

import { SignUpEmail } from "./_features/signup";

export default function Home() {
  return (
    <div className="w-screen flex h-screen items-center">
      <SignUpEmail/>
      <img src="/login.png" width={856} height={904} alt="home" />
    </div>
  );
}