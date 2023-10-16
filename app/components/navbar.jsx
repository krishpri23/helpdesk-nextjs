import Link from "next/link";
import Logout from "./logout";

export default function Navbar({ user }) {
  return (
    <nav>
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets"> Tickets </Link>
      {user && <span> {user.email} </span>}
      <Logout />
    </nav>
  );
}
