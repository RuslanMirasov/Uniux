import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { SidebarProject, SidebarTest, SidebarSession } from '..';
import css from './Sidebar.module.scss';

const Sidebar = () => {
  const page = getPageInfoByUrl(window.location.href);

  return (
    <aside className={`${css.Sidebar} custom-scrollbar`}>
      {page.name === 'project' && <SidebarProject />}
      {page.name === 'test' && <SidebarTest />}
      {page.name === 'session' && <SidebarSession />}
    </aside>
  );
};

export default Sidebar;
