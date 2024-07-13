import Logo from 'components/Logo/Logo';
import { TestContent } from 'components/Test';
import { ProjectProvider } from 'hooks';

const Test = () => {
  return (
    <ProjectProvider>
      <Logo position="right" />
      <TestContent />
    </ProjectProvider>
  );
};

export default Test;
