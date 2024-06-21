import { useEffect, useState } from 'react';
import { AddTaskForm } from 'components/Forms';
import { tasksOperations } from 'api';
import { TasksCollection } from '..';

const TasksWrapper = ({ project }) => {
  const [tasks, setTasks] = useState([]);
  const [tasksCount, setTasksCount] = useState(0);
  const { _id } = project;

  const isTestStarted = window.location.href.includes('/test/');

  useEffect(() => {
    const fetchTasks = async () => {
      const allTasks = await tasksOperations.getAll({ project: _id });
      setTasks(allTasks);
      setTasksCount(allTasks.length);
    };
    fetchTasks();
  }, [_id]);

  const handleAddTask = newTask => {
    setTasks(prev => [...prev, newTask]);
    setTasksCount(prev => prev + 1);
  };

  return (
    <>
      {tasks.length > 0 && <TasksCollection tasks={tasks} />}
      {!isTestStarted && <AddTaskForm number={tasksCount} projectId={_id} onNewTaskAdd={handleAddTask} />}
    </>
  );
};

export default TasksWrapper;
