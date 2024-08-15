import Link from "next/link";
import { UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-transparent p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <h3 className="text-xl font-bold">AIthlete</h3>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <UserButton className="w-10 h-10"></UserButton>
          </li>
        </ul>
      </nav>
    </header>
  );
}
