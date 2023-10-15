import { NextResponse } from "next/server";
import { dynamic } from "../../.next/server/app/favicon.ico/route";

// to not cache data
export const dynamic = "force-dynamic";

export async function GET() {
  const res = await fetch("http://localhost:4000/tickets");
  const tickets = await res.json();

  return NextResponse.json(tickets, {
    status: 200,
  });
}

// req body holds the data that is sent in POST
export async function POST(request) {
  // ticket data that is added by the user
  const ticket = await request.json();

  const res = await fetch("http://localhost:4000/tickets", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(ticket),
  });

  const newTicket = await res.json();

  return NextResponse.json(newTicket, { status: 201 });
}
