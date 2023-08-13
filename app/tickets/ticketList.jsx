import Link from "next/link";

export default async function TicketList() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  // fetch data
  const tickets = await getTickets();
  return (
    <>
      {tickets.map((ticket) => (
        <div key={ticket.id} className="card">
          <Link href={`/tickets/${ticket.id}`}>
            <h2>{ticket.title}</h2>
            <p>{ticket.body.slice(0, 200)}...</p>
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

export const getTickets = async () => {
  const res = await fetch("http://localhost:4000/tickets");
  return res.json();
};
