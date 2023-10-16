"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push("/login");
    }
    if (error) {
      console.log(error);
    }
    console.log("clciked");
  };
  return (
    <button className="btn-secondary" onClick={handleLogout}>
      {" "}
      Log out{" "}
    </button>
  );
}
