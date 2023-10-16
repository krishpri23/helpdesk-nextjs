"use client";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [signInError, setSignInError] = useState("");

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    setSignInError("");
    console.log(email, password);

    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setSignInError(error.message);
      console.log(signInError);
    }
    if (!error) {
      router.push("/");
    }
  };

  return (
    <main>
      <h2> Login </h2>
      <AuthForm handleSubmit={handleSubmit} />
      {signInError && <div className="error">{signInError}</div>}
    </main>
  );
}
