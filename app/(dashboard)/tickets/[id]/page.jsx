import { notFound } from "next/navigation";

// * To increase performance, params are statically generated. This only works if `revalidate` is specified
// * All pages are pre rendered with the static paramas.

export async function generateStaticParams() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return tickets.map((ticket) => ({
    id: ticket.id,
  }));
}

export default async function TicketDetails({ params }) {
  const tickets = await getTicketDetails(params.id);
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>

      {tickets && (
        <div className="card">
          <h2> {tickets.title}</h2>
          <p> {tickets.body}</p>
          <div className={`pill ${tickets.priority}`}>
            {tickets.priority} priority
          </div>
        </div> 
      )}
    </main>
  );
}

export const getTicketDetails = async (id) => {
  const res = await fetch(
    "http://localhost:4000/tickets/" + id
    // {
    //   next: {
    //     revalidate: 60, // reload after 60 seconds
    //   },
    // }
  );
  if (!res.ok) {
    notFound();
  }
  return res.json();
};
