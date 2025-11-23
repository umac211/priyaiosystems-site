import Link from "next/link";
import Logo from "./logo";

export default function Footer({ border = false }: { border?: boolean }) {
  return (
    <footer>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-8 text-center text-sm text-gray-600 md:py-12">
          &copy; {new Date().getFullYear()} Priya IO Systems. All rights reserved.
          <a
            href="mailto:admin@priyaiosystems.com"
            className="ml-4 hover:underline"
          >
            Contact Admin
          </a>
        </div>
      </div>
    </footer>
  );
}
