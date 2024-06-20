import React, { useState, useEffect, useRef } from 'react';
import DisplayIcon from '../../assets/Display.svg';
import '../../styles/dispayFilter.css';

const DisplayFilterComponent = ({ setGrouping, setSorting }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [grouping, setLocalGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setLocalSorting] = useState(localStorage.getItem('sorting') || 'priority');
  const dropdownRef = useRef(null);

  useEffect(() => {
    setGrouping(grouping);
    setSorting(sorting);
  }, [grouping, sorting, setGrouping, setSorting]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleGroupingChange = (e) => {
    const newGrouping = e.target.value;
    setLocalGrouping(newGrouping);
    localStorage.setItem('grouping', newGrouping);
    setGrouping(newGrouping);
  };

  const handleSortingChange = (e) => {
    const newSorting = e.target.value;
    setLocalSorting(newSorting);
    localStorage.setItem('sorting', newSorting);
    setSorting(newSorting);
  };

  return (
    <div className="display-filter-component">
      <button onClick={handleToggle} className="display-button">
        <img src={DisplayIcon} alt="Display" /> Display
      </button>
      {isOpen && (
        <div className="dropdown" ref={dropdownRef}>
          <div className="dropdown-group">
            <label>Grouping</label>
            <select onChange={handleGroupingChange} value={grouping}>
              <option value="status">Status</option>
              <option value="userId">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="dropdown-group">
            <label>Ordering</label>
            <select onChange={handleSortingChange} value={sorting}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayFilterComponent;

