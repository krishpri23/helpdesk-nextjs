import Navbar from "../components/navbar";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function DashboardLayout({ children }) {
  // retrieve user info to display on navbar

  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();
  console.log(data.session);

  if (!data.session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar user={data.session.user} />
      {children}/
    </>
  );
}

// children refers to the page component inside this route
