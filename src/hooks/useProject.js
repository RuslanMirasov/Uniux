import { useParams } from 'react-router-dom';
import { createContext, useContext, useState, useEffect } from 'react';
import { tasksOperations, projectOperation } from 'api';
import { useAuth } from 'hooks';

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const { user, isLoggedIn } = useAuth();
  const { project_id } = useParams();
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //============= FETCHT PROJECT AND TASKS TO PROJECT ===================
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const allTasks = await tasksOperations.getAll({ project: project_id });
        const currentProject = await projectOperation.getById(project_id);
        setTasks(allTasks.data);
        setProject(currentProject);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [project_id]);

  //============= UPDATE PROJECT VIEWS ===================
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
          setError(error);
        }
      };

      updateProjectViews();
    }
  }, [project, isLoggedIn, project_id, user._id]);

  return <ProjectContext.Provider value={{ project, tasks, loading, error }}>{children}</ProjectContext.Provider>;
};
