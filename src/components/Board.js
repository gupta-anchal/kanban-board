// src/components/KanbanBoard.jsx
import React, { useEffect, useState } from 'react';
import { fetchTickets } from '../utils/api';
import '../styles/kanbanBoard.css';

const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');

  useEffect(() => {
    const getTickets = async () => {
      const data = await fetchTickets();
      setTickets(data);
    };

    getTickets();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem('sorting', sorting);
  }, [sorting]);

  const groupBy = (tickets, key) => {
    return tickets.reduce((result, ticket) => {
      (result[ticket[key]] = result[ticket[key]] || []).push(ticket);
      return result;
    }, {});
  };

  const sortedTickets = [...tickets].sort((a, b) => {
    if (sorting === 'priority') {
      return b.priority - a.priority;
    } else if (sorting === 'title') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  const groupedTickets = groupBy(sortedTickets, grouping);

  return (
    <div className="kanban-board">
      <div className="controls">
        <button onClick={() => setGrouping('status')}>Group by Status</button>
        <button onClick={() => setGrouping('userId')}>Group by User</button>
        <button onClick={() => setGrouping('priority')}>Group by Priority</button>
        <button onClick={() => setSorting('priority')}>Sort by Priority</button>
        <button onClick={() => setSorting('title')}>Sort by Title</button>
      </div>
      <div className="columns">
        {Object.keys(groupedTickets).map(group => (
          <div key={group} className="column">
            <h3>{group}</h3>
            {groupedTickets[group].map(ticket => (
              <div key={ticket.id} className="ticket">
                <h4>{ticket.title}</h4>
                <p>{ticket.tag.join(', ')}</p>
                <p>Priority: {ticket.priority}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
