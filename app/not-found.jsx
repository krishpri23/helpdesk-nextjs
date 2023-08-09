import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center">
      <h2 className="error"> Page does not exist</h2>
      <p>
        Go back to <Link href="/"> Dashboard</Link>{" "}
      </p>
    </main>
  );
}

// not-found - naming convention for file, NotFound() for function
