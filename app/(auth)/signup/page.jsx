"use client";
import AuthForm from "../AuthForm";

export default function SignupPage() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(`SIGN UP :${email}, ${password}`);
  };
  return (
    <main>
      <h2> Signup</h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
