function Footer() {
  return (
    <footer className="border-t bg-slate-100 p-2 py-16 text-center text-slate-600 dark:border-gray-700 dark:bg-slate-800 dark:text-slate-100">
      &copy; {new Date().getFullYear()} My Blog
    </footer>
  );
}

export default Footer;
