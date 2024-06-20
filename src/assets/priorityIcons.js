// src/assets/priorityIcons.js
import UrgentPriorityIcon from './SVG_Urgent_Priority_colour.svg';
import HighPriorityIcon from './Img_High_Priority.svg';
import MediumPriorityIcon from './Img_Medium_Priority.svg';
import LowPriorityIcon from './Img_Low_Priority.svg';
import NoPriorityIcon from './No_priority.svg';

const priorityIcons = {
  4: { label: 'Urgent', icon: UrgentPriorityIcon },
  3: { label: 'High', icon: HighPriorityIcon },
  2: { label: 'Medium', icon: MediumPriorityIcon },
  1: { label: 'Low', icon: LowPriorityIcon },
  0: { label: 'No Priority', icon: NoPriorityIcon },
};

export default priorityIcons;
