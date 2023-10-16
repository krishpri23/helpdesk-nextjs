import Link from "next/link";

export default async function TicketList() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // fetch data

  const tickets = await getTickets();
  console.log(tickets);
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <Link href={`/tickets/${ticket.id}`}>
            <h2>{ticket.title}</h2>
            <p>{ticket.body}...</p>
            <div className={`pill ${ticket.priority}`}>
              {ticket.priority} priority
            </div>
          </Link>
        </div>
      ))}

      {tickets.length === 0 && (
        <p className="text-center">There are no open tickets</p>
      )}
    </>
  );
}

// Fetch logic in a separate function

export const getTickets = async () => {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0, // opt out to using cache data
    },
  });
  return res.json();
};
