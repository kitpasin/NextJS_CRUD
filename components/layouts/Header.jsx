import Link from "next/link";

function Header() {
  return (
    <header>
      <nav className="flex justify-between items-center bg-gradient-to-tr from-slate-600 to-slate-900 p-4">
        <Link className="text-white font-bold" href={"/"}>
          CRUD
        </Link>
        <Link
          className="bg-blue-600 p-2 rounded-md text-white font-bold shadow-xl"
          href={"/add_topic"}
        >
          ADD TOPIC
        </Link>
      </nav>
    </header>
  );
}

export default Header;
