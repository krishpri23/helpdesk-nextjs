import React from "react";
import TicketList from "./ticketList";
import Loading from "../loading";
import { Suspense } from "react";

export default async function TicketPage() {
  return (
    <main>
      <h1>Tickets</h1>
      <p>
        <small>Currently open tickets </small>
      </p>

      <Suspense fallback={<Loading />}>
        <TicketList />
      </Suspense>
    </main>
  );
}
