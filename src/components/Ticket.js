import React from 'react';

const Ticket = ({ ticket }) => (
  <div className="ticket">
    <h4>{ticket.title}</h4>
    <p>{ticket.tag.join(', ')}</p>
  </div>
);

export default Ticket;
