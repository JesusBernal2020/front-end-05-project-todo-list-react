import { useSelector } from 'react-redux';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useSelector((store) => store.todo);
  console.log(tasks);

  return (
    <section className="max-w-[320px] p-4 mx-auto grid gap-8">
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </section>
  );
};

export default TaskList;
