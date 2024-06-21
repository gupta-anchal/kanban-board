import React from "react";
import priorityIcons from "../assets/priorityIcons";
import statusIcons from "../assets/statusIcons";
import { generateInitials } from "../utils/generateInitials";

const Ticket = ({ ticket, grouping, userName }) => {

  if (grouping === "status") {
    return (
      <div className="card-content">
        <div className="card-main">
          <span className="ticket-id">{ticket.id}</span>
          <div className="card-title">{ticket.title}</div>
          <div className="card-stats">
            <img
              src={priorityIcons[ticket.priority].icon}
              alt="Priority Icon"
              className="priority-icon"
            />
            <span className="ticket-tag">
              <span class="dot"></span>
              {ticket.tag.join(", ")}
            </span>
          </div>
        </div>
        <div className="card-avatar">
          <div className="user-avatar">{generateInitials(userName)}</div>
        </div>
      </div>
    );
  } else if (grouping === "priority") {
    return (
      <div className="card-content">
        <div className="card-main">
          <span className="ticket-id">{ticket.id}</span>
          <div className="card-title">
            <img
              src={statusIcons[ticket.status].icon}
              alt="Status Icon"
              className="status-icon"
            />
            {ticket.title}
          </div>
          <div className="card-stats">
            <span className="ticket-tag">
              <span class="dot"></span>
              {ticket.tag.join(", ")}
            </span>
          </div>
        </div>
        <div className="card-avatar">
          <div className="user-avatar">{generateInitials(userName)}</div>
        </div>
      </div>
    );
  } else if (grouping === "userId") {
    return (
      <div className="card-content single-column">
        <span className="ticket-id">{ticket.id}</span>
        <div className="card-title">
          <img
            src={statusIcons[ticket.status].icon}
            alt="Status Icon"
            className="status-icon"
          />
          {ticket.title}
        </div>
        <div className="card-stats">
          <img
            src={priorityIcons[ticket.priority].icon}
            alt="Priority Icon"
            className="priority-icon"
          />
          <span className="ticket-tag">
            <span class="dot"></span>
            {ticket.tag.join(", ")}
          </span>
        </div>
      </div>
    );
  }
};

export default Ticket;
