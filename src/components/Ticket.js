import React from "react";
import priorityIcons from "../assets/priorityIcons";
import statusIcons from "../assets/statusIcons";
import user1Avatar from "../assets/user1.svg";
import user2Avatar from "../assets/user2.svg";

const Ticket = ({ ticket, grouping }) => {
  const userAvatars = {
    "usr-1": user1Avatar,
    "usr-2": user2Avatar,
    "usr-3": user2Avatar,
    "usr-4": user2Avatar,
    "usr-5": user1Avatar,
  };

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
          <img
            src={userAvatars[ticket.userId]}
            alt="User Avatar"
            className="avatar"
          />
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
          <img
            src={userAvatars[ticket.userId]}
            alt="User Avatar"
            className="avatar"
          />
        </div>
      </div>
    );
  } else if (grouping === "userId") {
    console.log("grouping is user");
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
