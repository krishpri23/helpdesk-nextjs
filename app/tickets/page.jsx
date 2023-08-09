import React from "react";
import TicketList from "./ticketList";

export default function TicketPage() {
  return (
    <main>
      <h1>Tickets</h1>
      <p>
        <small>Currently open tickets </small>
      </p>
      <TicketList />
    </main>
  );
}
