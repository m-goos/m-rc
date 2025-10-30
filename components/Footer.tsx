export default function Footer() {
  return (
    <footer className="flex flex-col items-center text-sm text-slate-600 py-4 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50">
      © {new Date().getFullYear()} Marc Goossens
    </footer>
  );
}
