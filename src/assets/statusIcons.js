import TodoIcon from './To-do.svg';
import InProgressIcon from './in-progress.svg';
import DoneIcon from './Done.svg';
import CancelledIcon from './Cancelled.svg';
import BacklogIcon from './Backlog.svg';

const statusIcons = {
  'Backlog': { label: 'Backlog', icon: BacklogIcon },
  'Todo': { label: 'Todo', icon: TodoIcon },
  'In progress': { label: 'In progress', icon: InProgressIcon },
  'Done': { label: 'Done', icon: DoneIcon },
  'Cancelled': { label: 'Cancelled', icon: CancelledIcon },
};

export default statusIcons;
