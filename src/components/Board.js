import React, { useEffect, useState } from "react";
import { fetchTickets, fetchUsers } from "../utils/api";
import "../styles/kanbanBoard.css";
import DisplayFilterComponent from "./Filter/DisplayFilterComponent";
import Ticket from "./Sections/ticket";
import { BoardHeader } from "./Sections/boardHeader";

const statusOrder = ["Backlog", "Todo", "In progress", "Done", "Cancelled"];

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(
    localStorage.getItem("grouping") || "status"
  );
  const [sorting, setSorting] = useState(
    localStorage.getItem("sorting") || "priority"
  );

  useEffect(() => {
    const getData = async () => {
      const ticketsData = await fetchTickets();
      const usersData = await fetchUsers();
      setTickets(ticketsData);
      setUsers(usersData);
    };

    getData();
  }, []);

  useEffect(() => {
    localStorage.setItem("grouping", grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("sorting", sorting);
  }, [sorting]);

  const groupBy = (tickets, key) => {
    return tickets.reduce((result, ticket) => {
      (result[ticket[key]] = result[ticket[key]] || []).push(ticket);
      return result;
    }, {});
  };

  const sortedTickets = [...tickets].sort((a, b) => {
    if (sorting === "priority") {
      return b.priority - a.priority;
    } else if (sorting === "title") {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const groupedTickets = groupBy(sortedTickets, grouping);

  const getUserById = (userId) => {
    const user = users.find((user) => user.id === userId);
    return user ? user.name : userId;
  };

  return (
    <div className="kanban-board">
      <div className="controls">
        <DisplayFilterComponent
          setGrouping={setGrouping}
          setSorting={setSorting}
        />
      </div>
      <div className="columns">
        {grouping === "status" &&
          statusOrder.map((status) => (
            <div key={status} className="column">
              <BoardHeader
                group={status}
                count={
                  groupedTickets[status] ? groupedTickets[status].length : 0
                }
              />
              {groupedTickets[status] && groupedTickets[status].length > 0 ? (
                groupedTickets[status].map((ticket) => (
                  <div key={ticket.id} className="ticket">
                    <Ticket ticket={ticket} grouping={grouping} userName={getUserById(ticket.userId)}/>
                  </div>
                ))
              ) : (
                <div className="ticket-placeholder"></div>
              )}
            </div>
          ))}
        {grouping === "userId" &&
          Object.keys(groupedTickets).map((group) => (
            <div key={group} className="column">
              <BoardHeader
                group={grouping === "userId" ? getUserById(group) : group}
                count={groupedTickets[group].length}
              />
              {groupedTickets[group].map((ticket) => (
                <div key={ticket.id} className="ticket">
                  <Ticket ticket={ticket} grouping={grouping} />
                </div>
              ))}
            </div>
          ))}
        {grouping === "priority" &&
          Object.keys(groupedTickets).map((group) => (
            <div key={group} className="column">
              <BoardHeader group={group} count={groupedTickets[group].length} />
              {groupedTickets[group].map((ticket) => (
                <div key={ticket.id} className="ticket">
                  <Ticket ticket={ticket} grouping={grouping} userName={getUserById(ticket.userId)}/>
                </div>
              ))}
            </div>
          ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
