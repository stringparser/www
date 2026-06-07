import { Navbar } from "@/components/Navbar";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      <Navbar variant="overlay" />
      {children}
    </main>
  );
}
