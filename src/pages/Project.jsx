import { ProjectBody, ProjectSidebar } from 'components/ProjectPage';
import { useParams, useNavigate } from 'react-router-dom';
import { projectOperation } from 'api';
import { useEffect, useState } from 'react';
import { usePopup } from 'contexts/PopupContext';
import { useAuth } from 'hooks';

const Project = () => {
  const navigate = useNavigate();
  const { user, isLoggedIn } = useAuth();
  const { popupOpen } = usePopup();
  const [project, setProject] = useState({});
  const { project_id } = useParams();

  //GET PROJECT BY ID
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await projectOperation.getById(project_id);
        setProject(response);
      } catch (error) {
        navigate('/');
        popupOpen('error', `Error ${error.response.status}`, error.response.statusText);
      }
    };

    fetchProject();
  }, [project_id, popupOpen, setProject, navigate]);

  //SET VIEWS
  useEffect(() => {
    if (project.owner) {
      const updateProjectViews = async () => {
        const { _id, owner, lastview, views } = project;
        const params = {
          id: _id,
          lastview: owner._id === user._id ? new Date().toISOString() : new Date(lastview),
          views: !isLoggedIn || (isLoggedIn && owner._id !== user._id) ? Number(views + 1) : views,
        };

        try {
          await projectOperation.updateViews(project_id, params);
        } catch (error) {
          navigate('/');
          popupOpen('error', `Error ${error.response.status}`, error.response.statusText);
        }
      };

      updateProjectViews();
    }
  }, [project, isLoggedIn, navigate, popupOpen, project_id, user._id]);

  return (
    <>
      <ProjectSidebar project={project} />
      <ProjectBody project={project} />
    </>
  );
};

export default Project;
