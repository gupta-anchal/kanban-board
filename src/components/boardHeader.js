// import React from 'react'
// import statusIcons from '../assets/statusIcons';
// import priorityIcons from '../assets/priorityIcons';
// import addIcon from "../assets/add.svg";
// import menuIcon from "../assets/3_dot_menu.svg";

// export const BoardHeader = ({group, count}) => {
//   return (
//         <div className="column-header">
//           {statusIcons[group] ? (
//             <>
//               <img
//                 src={statusIcons[group].icon}
//                 alt={`${statusIcons[group].label} Icon`}
//                 className="status-icon"
//               />
//               <h3>{statusIcons[group].label} ({count})</h3>
//             </>
//           ) : priorityIcons[group] ? (
//             <>
//               <img
//                 src={priorityIcons[group].icon}
//                 alt={`${priorityIcons[group].label} Icon`}
//                 className="priority-icon"
//               />
//               <h3>{priorityIcons[group].label} ({count})</h3>
//             </>
//           ) : (
//             <h3>{group} ({count})</h3>
//           )}
//           <img src={addIcon} alt="Add Icon" className="add-icon" />
//           <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
//         </div>
//       );
// }

import React from "react";
import statusIcons from "../assets/statusIcons";
import priorityIcons from "../assets/priorityIcons";
import addIcon from "../assets/add.svg";
import menuIcon from "../assets/3_dot_menu.svg";
import user1Avatar from "../assets/user1.svg";
import user2Avatar from "../assets/user2.svg";

export const BoardHeader = ({ group, count }) => {
  const userAvatars = {
    "usr-1": user1Avatar,
    "usr-2": user2Avatar,
    "usr-3": user2Avatar,
    "usr-4": user2Avatar,
    "usr-5": user1Avatar,
  };
  return (
    <div className="column-header">
      {statusIcons[group] ? (
        <>
          <img
            src={statusIcons[group].icon}
            alt={`${statusIcons[group].label} Icon`}
            className="status-icon"
          />
          <h3>
            {statusIcons[group].label} ({count})
          </h3>
        </>
      ) : priorityIcons[group] ? (
        <>
          <img
            src={priorityIcons[group].icon}
            alt={`${priorityIcons[group].label} Icon`}
            className="priority-icon"
          />
          <h3>
            {priorityIcons[group].label} ({count})
          </h3>
        </>
      ) : userAvatars[group] ? (
        <>
          <img
            src={userAvatars[group]}
            alt={`${group} Avatar`}
            className="user-avatar"
            width={30}
            height={30}
          />
          <h3>
            {group} ({count})
          </h3>
        </>
      ) : (
        <h3>
          {group} ({count})
        </h3>
      )}
      <img src={addIcon} alt="Add Icon" className="add-icon" />
      <img src={menuIcon} alt="Menu Icon" className="menu-icon" />
    </div>
  );
};
