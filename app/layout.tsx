import "./globals.css";
import { Inter } from "next/font/google";

import { ClerkProvider } from "@clerk/nextjs";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toast-provider";
// import prismadb from "@/lib/prismadb";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Admin DashBord",
  description: "Welcome to Admin DashBord!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const store = prismadb.store.findFirst
  return (
    <ClerkProvider>
      <html lang="en">
        <ToasterProvider />
        <ModalProvider />
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
