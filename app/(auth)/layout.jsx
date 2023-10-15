import Link from "next/link";

export default function AuthLayout({ children }) {
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
