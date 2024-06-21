import { useEffect, useState } from 'react';
import { AddTaskForm } from 'components/Forms';
import { TasksOperations } from 'api';
import { TasksCollection } from '..';

const TasksWrapper = ({ project, setHasTasks }) => {
  const [tasks, setTasks] = useState([]);
  const [tasksCount, setTasksCount] = useState(0);
  const { _id } = project;

  const isTestStarted = window.location.href.includes('/test/');

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await TasksOperations.getAll({ project: _id });
      setTasks(allTasks);
      setTasksCount(allTasks.length);
      setHasTasks(allTasks.length > 0);
    };
    fetchTasks();
  }, [_id, setHasTasks]);

  const handleAddTask = newTask => {
    setTasks(prev => [...prev, newTask]);
    setTasksCount(prev => prev + 1);
    setHasTasks(true);
  };

  return (
    <>
      {tasks.length > 0 && <TasksCollection tasks={tasks} />}
      {!isTestStarted && <AddTaskForm number={tasksCount} projectId={_id} onNewTaskAdd={handleAddTask} />}
    </>
  );
};

export default TasksWrapper;
