"use client";
import AuthForm from "../AuthForm";

export default function LoginPage() {
  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <main>
      <h2> Login </h2>
      <AuthForm handleSubmit={handleSubmit} />
    </main>
  );
}
