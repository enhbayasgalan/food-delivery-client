/* eslint-disable @next/next/no-img-element */
"use client";

import { Login } from "./_features/login";
export default function Home() {
  return (
    <div className="w-screen flex h-screen items-center">
        <Login />
      <img src="/login.png" width={856} height={904} alt="home" />
    </div>
  );
}