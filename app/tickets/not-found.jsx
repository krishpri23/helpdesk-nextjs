import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2 className="error text-center ">
        {" "}
        Ticket details not found for the specific ticket ID{" "}
      </h2>
      <p>
        Go back to all <Link href="/tickets">tickets</Link>
      </p>
    </main>
  );
}
