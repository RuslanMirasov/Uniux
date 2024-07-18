import { useParams } from 'react-router-dom';
import getPageInfoByUrl from 'utils/getPageInfoByUrl';
import { createContext, useContext, useState, useEffect } from 'react';
import { tasksOperations, projectOperation, sessionsOperations } from 'api';
import { useAuth } from 'hooks';
import { usePopup } from 'contexts/PopupContext';

const ProjectContext = createContext();

export const useProject = () => useContext(ProjectContext);

export const ProjectProvider = ({ children }) => {
  const { host, subdomen } = getPageInfoByUrl(window.location.href);
  const { user, isLoggedIn } = useAuth();
  const { popupOpen } = usePopup();
  const { project_id } = useParams();
  const [project, setProject] = useState({});
  const [tasks, setTasks] = useState([]);
  const [sessions, setSessions] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //============= SHOW ERRORS ===================
  useEffect(() => {
    try {
      if (error) {
        popupOpen('error', `Error ${error.response.status}`, error.response.data.message);
      }
    } finally {
      setError(null);
    }
  }, [error, popupOpen]);

  //============= FETCHT PROJECT AND TASKS TO PROJECT ===================
  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      try {
        const allTasks = await tasksOperations.getAll({ project: project_id });
        const currentProject = await projectOperation.getById(project_id);
        const currentSessions = await sessionsOperations.getAll({ project: project_id });
        setTasks(allTasks);
        setProject(currentProject);
        setSessions(currentSessions);
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

  //============= ADD NEW TASK ===================

  const addNewTask = async () => {
    setLoading(true);
    const taskCurrentNumber = tasks.length > 0 ? Number(tasks[tasks.length - 1].number) + 1 : 1;

    try {
      const newData = {
        project: project_id,
        device: 'app',
        number: taskCurrentNumber,
        name: `Task ${taskCurrentNumber}`,
        proto: '',
        target: `${host}${subdomen}/test/${project_id}?task=${taskCurrentNumber}&status=done`,
        description: '',
      };
      const newTask = await tasksOperations.addNew(newData);
      setTasks(prev => [...prev, newTask]);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //============= UPDATE TASK BY NAME ===================
  const updateTakskByName = async (taskId, name, value) => {
    setLoading(true);
    try {
      await tasksOperations.updateTask(taskId, name, { [name]: value.trim().replace(/\s+/g, ' ') });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  //============= UPDATE PROJECT NAME ===================
  const updateProjectName = async value => {
    setLoading(true);

    try {
      await projectOperation.updateName(project_id, { name: value.trim().replace(/\s+/g, ' ') });
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectContext.Provider value={{ project, tasks, sessions, addNewTask, updateTakskByName, updateProjectName, loading, error }}>
      {children}
    </ProjectContext.Provider>
  );
};
