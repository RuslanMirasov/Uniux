import { SidebarContent } from '..';
import { InputCheckbox } from 'components/Forms/InputTypes';
import { useProject } from 'hooks';
import { Title } from 'components/Typography';
import { CopyLink } from 'components/Forms';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { StartStopTest } from 'components/Buttons';

const SidebarTest = () => {
  const { project } = useProject();
  const { host, subdomen } = getPageInfoByUrl(window.location.href);

  return (
    <>
      <SidebarContent>
        <InputCheckbox type="checkbox" name="test_start" label="&nbsp;" value="ok" checked readOnly />
        <Title tag="h2" size="h2">
          Your test is start
        </Title>

        <Title tag="h1" size="h4">
          {project.name}
        </Title>

        <CopyLink value={`${host}${subdomen}/test/${project._id}`} />
      </SidebarContent>
      <SidebarContent>
        <StartStopTest />
      </SidebarContent>
    </>
  );
};

export default SidebarTest;
