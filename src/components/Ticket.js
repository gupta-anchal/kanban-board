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
          <p className="ticket-id">{ticket.id}</p>
          <h4>{ticket.title}</h4>
          <img
            src={priorityIcons[ticket.priority].icon}
            alt="Priority Icon"
            className="priority-icon"
          />
          <p className="ticket-tag">{ticket.tag.join(", ")}</p>
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
          <p className="ticket-id">{ticket.id}</p>
          <h4>{ticket.title}</h4>
          <img
            src={statusIcons[ticket.status]?.icon}
            alt="Status Icon"
            className="status-icon"
          />
          <p className="ticket-tag">{ticket.tag.join(", ")}</p>
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
        <p className="ticket-id">{ticket.id}</p>
        <h4>{ticket.title}</h4>
        <img
          src={statusIcons[ticket.status]?.icon}
          alt="Status Icon"
          className="status-icon"
        />
        <img
          src={priorityIcons[ticket.priority].icon}
          alt="Priority Icon"
          className="priority-icon"
        />
        <p className="ticket-tag">{ticket.tag.join(", ")}</p>
      </div>
    );
  }
};

export default Ticket;
