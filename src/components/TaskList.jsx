import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useSelector((store) => store.todo);
  console.log(tasks);

  return (
    <section className=" p-4 flex flex-col items-center gap-8">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
