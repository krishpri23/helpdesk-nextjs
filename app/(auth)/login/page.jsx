"use client";
import AuthForm from "../AuthForm";

export default function LoginPage() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(`SIGN UP :${email}, ${password}`);
  };

  return (
    <main>
      <h2> Login </h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
