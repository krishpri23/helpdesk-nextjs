import TicketForm from "@/app/(dashboard)/tickets/create/ticketForm";
import React from "react";

export default function CreateTicket() {
  return (
    <div>
      <h2 className="text-center pb-5"> Create a new ticket </h2>
      <TicketForm />
    </div>
  );
}
