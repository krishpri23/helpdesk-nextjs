"use client";
import { useState } from "react";
import AuthForm from "../AuthForm";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [formError, setFormError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(email, password);

    const supabase = createClientComponentClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      // location.origin returns the main part of url, callback handles email verification
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setFormError(error.message);
    }

    if (!error) {
      router.push("/verify");
    }
  };
  return (
    <main>
      <h2> Signup</h2>
      {formError && <p> Sorry, unable to sign up. {formError} </p>}
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
