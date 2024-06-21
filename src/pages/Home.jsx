import { Button } from 'components/Buttons';
import { SearchForm, SortForm } from 'components/Forms';
import { HomeContent, HomeHeader, HomeSidebar, HomeWitjets } from 'components/HomePage';
import { ProfileInfo } from 'components/Profile';
import { ProjectsWrapper, ProjectsCollection } from 'components/Projects';
import ProjectsHeader from 'components/Projects/ProjectsHeader/ProjectsHeader';
import { Title } from 'components/Typography';

const Home = () => {
  return (
    <>
      <HomeSidebar>
        <HomeWitjets>
          <ProfileInfo />
          <SearchForm />
        </HomeWitjets>
      </HomeSidebar>
      <HomeContent>
        <HomeHeader>
          <Button to="/new" icon="plus" size="small">
            Test project
          </Button>
        </HomeHeader>
        <ProjectsWrapper>
          <ProjectsHeader>
            <Title tag="h1" size="h4" auto>
              Projects
            </Title>

            <SortForm />
          </ProjectsHeader>
          <ProjectsCollection />
        </ProjectsWrapper>
      </HomeContent>
    </>
  );
};

export default Home;
