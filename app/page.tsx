"use client";

import { useAuth } from "@/hooks/useAuth";
import Platform from "@/components/Platform";
import LandingPage from "@/components/LandingPage/LandingPage";

export default function Home() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <p>carregando...</p>;
  }

  if (user) {
    return <Platform />;
  }

  return <LandingPage />;
}
