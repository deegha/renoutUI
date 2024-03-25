"use client";

import { getUser } from "@/services/authenticationService";
import { useEffect, useState } from "react";
import { User } from "@/services/d";
import { useRouter } from "next/navigation";
import { AuthProvider, useAuth } from "@/context/authContenxt";

export default function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <LoginRender>{children}</LoginRender>
    </AuthProvider>
  );
}

function LoginRender({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  const { loading, user } = useAuth();
  if (loading) return <div>loading</div>;

  if (user) router.push("/dashboard");

  return <>{children}</>;
}
