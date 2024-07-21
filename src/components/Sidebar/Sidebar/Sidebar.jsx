import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { SidebarProject, SidebarSession } from '..';
import css from './Sidebar.module.scss';

const Sidebar = () => {
  const { name } = getPageInfoByUrl(window.location.href);

  return (
    <aside className={`${css.Sidebar} custom-scrollbar ${name === 'sessions' && css.NoBtn}`}>
      {name === 'project' && <SidebarProject />}
      {name === 'sessions' && <SidebarSession />}
      {name === 'session' && <SidebarSession />}
    </aside>
  );
};

export default Sidebar;
