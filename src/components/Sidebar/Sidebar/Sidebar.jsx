import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { SidebarProject, SidebarTest, SidebarSession } from '..';
import css from './Sidebar.module.scss';

const Sidebar = () => {
  const { name } = getPageInfoByUrl(window.location.href);

  return (
    <aside className={`${css.Sidebar} custom-scrollbar`}>
      {name === 'project' && <SidebarProject />}
      {name === 'test' && <SidebarTest />}
      {name === 'session' && <SidebarSession />}
    </aside>
  );
};

export default Sidebar;
