// This page is common for both login / register components

import Link from "next/link";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function AuthLayout({ children }) {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect("/");
  }

  return (
    <>
      <nav>
        <Link href="/">
          <h2> Helpdesk </h2>{" "}
        </Link>
        <Link href="/signup"> Sign up </Link>
        <Link href="/login"> Login </Link>
      </nav>

      {children}
    </>
  );
}
