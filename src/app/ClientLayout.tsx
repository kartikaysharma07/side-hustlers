"use client";

import { SessionProvider } from "next-auth/react";
import ClientBody from "./ClientBody";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <ClientBody>{children}</ClientBody>
    </SessionProvider>
  );
}