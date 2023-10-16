import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Logout from "./logout";

export default async function Navbar() {
  // retrieve user info to display on navbar

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log(data.session);

  return (
    <nav>
      <h1>Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets"> Tickets </Link>
      {data.session && <span> {data.session.user.email} </span>}
      <Logout />
    </nav>
  );
}
