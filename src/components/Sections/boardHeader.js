import React from "react";
import statusIcons from "../../assets/statusIcons";
import priorityIcons from "../../assets/priorityIcons";
import addIcon from "../../assets/add.svg";
import menuIcon from "../../assets/3_dot_menu.svg";
import { generateInitials } from "../../utils/generateInitials";

export const BoardHeader = ({ group, count }) => {

  return (
    <div className="column-header">
      {statusIcons[group] ? (
        <span className="column-header-title">
          <img
            src={statusIcons[group].icon}
            alt={`${statusIcons[group].label} Icon`}
            className="status-icon"
          />
          <h3>
            {statusIcons[group].label} <span className="count">{count}</span>
          </h3>
        </span>
      ) : priorityIcons[group] ? (
        <span className="column-header-title">
          <img
            src={priorityIcons[group].icon}
            alt={`${priorityIcons[group].label} Icon`}
            className="priority-icon"
          />
          <h3>
            {priorityIcons[group].label} <span className="count">{count}</span>
          </h3>
        </span>
      ) : (
        <span className="column-header-title">
          <div className="user-avatar">{generateInitials(group)}</div>
          <h3>
            {group} <span className="count">{count}</span>
          </h3>
        </span>
      )}
      <span className="column-header-icons">
        <img src={addIcon} alt="Add Icon" className="add-icon" />
        <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
      </span>
    </div>
  );
};
