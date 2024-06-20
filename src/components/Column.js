import React from 'react';
import Ticket from './Ticket';

const Column = ({ title, tickets }) => (
  <div className="column">
    <h3>{title}</h3>
    {tickets.map(ticket => (
      <Ticket key={ticket.id} ticket={ticket} />
    ))}
  </div>
);

export default Column;
