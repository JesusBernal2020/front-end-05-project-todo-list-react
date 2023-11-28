import PropTypes from 'prop-types';
import {
  changeDoneTask,
  changeShowModal,
  deleteTask,
  setTaskToEdit,
} from '../store/slices/todo.slice';
import { useDispatch } from 'react-redux';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const handleChangeCheckbox = () => {
    dispatch(changeDoneTask(task.id));
  };

  const handleClickDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleClickEdit = () => {
    dispatch(changeShowModal());
    dispatch(setTaskToEdit(task));
  };

  return (
    <article className="grid w-[300px] gap-5 bg-sky-900 p-4 rounded-md ">
      <div className="flex justify-between">
        <div className="flex gap-2">
          <input
            checked={task.isDone}
            onChange={handleChangeCheckbox}
            type="checkbox"
          />
          <h4
            className={`font-bold text-2xl text-emerald-400 ${
              task.isDone && 'line-through'
            }  `}
          >
            {task.title}
          </h4>
        </div>
        <div className="text-2xl flex gap-2 justify-center">
          <button
            onClick={handleClickDelete}
            className="transition-all duration-300 ease-in-out hover:text-emerald-400"
          >
            <i className="bx bxs-trash-alt"></i>
          </button>
          <button
            onClick={handleClickEdit}
            className="transition-all duration-300 ease-in-out hover:text-emerald-400"
          >
            <i className="bx bxs-pencil"></i>
          </button>
        </div>
      </div>
      <hr />
      <div className="p-5">
        <p
          className={` text-white text-lg text-center ${
            task.isDone && 'line-through'
          } `}
        >
          {task.description}
        </p>
      </div>
    </article>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
