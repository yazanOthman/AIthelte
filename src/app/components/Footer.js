import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-5">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 flex flex-row justify-center gap-4">
        <p className="text-gray-400">
          &copy; 2024 AIthlete. All rights reserved.
        </p>
        <Link href="https://github.com/yazanOthman/AIthelte" target="_blank">
          <FaGithub size={22} />
        </Link>
      </div>
    </footer>
  );
}
