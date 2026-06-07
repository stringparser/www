export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black px-6 py-4 text-center text-sm text-white/90 md:px-10">
      © {year} Javier Carrillo Milla
    </footer>
  );
}
