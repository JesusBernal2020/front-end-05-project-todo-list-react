import { useDispatch, useSelector } from 'react-redux';
import {
  addTask,
  changeShowModal,
  setTaskToEdit,
  updateTask,
} from '../store/slices/todo.slice';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

const ModalTask = () => {
  const { isModalOpen, taskToEdit } = useSelector((store) => store.todo);

  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm();

  const handleClickCloseModal = () => {
    dispatch(changeShowModal());
  };

  const submit = (data) => {
    const tasks = {
      id: crypto.randomUUID(),
      isDone: false,
      ...data,
    };

    if (taskToEdit) {
      dispatch(updateTask(data));
    } else {
      dispatch(addTask(tasks));
    }
    reset({
      title: '',
      description: '',
    });

    dispatch(changeShowModal());
    dispatch(setTaskToEdit(null));
  };

  useEffect(() => {
    if (taskToEdit) {
      reset(taskToEdit);
    }
  }, [taskToEdit]);

  return (
    <section
      className={`fixed top-0 left-0 right-0 bottom-0 bg-emerald-400/25 flex justify-center items-center transition-all duration-500 ease-in-out ${
        isModalOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
    >
      <form
        onSubmit={handleSubmit(submit)}
        className="grid relative gap-6 w-[270px] bg-black p-4 rounded-xl"
      >
        <h3 className="text-center text-2xl font-bold">
          {taskToEdit ? 'Editar tarea' : 'Nueva tarea'}
        </h3>
        <div className="grid gap-1">
          <label htmlFor="title">Titulo</label>
          <input
            {...register('title')}
            className="text-black rounded-md p-2 outline-none"
            id="title"
            type="text"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Descripcion</label>
          <textarea
            {...register('description')}
            className="text-black rounded-md p-2 outline-none"
            id=""
            rows="6"
          ></textarea>
        </div>
        <button
          onClick={handleClickCloseModal}
          type="button"
          className="absolute top-2 right-2 text-xl text-emerald-400 hover:text-emerald-500 transition-all duration-300 ease-in-out "
        >
          <i className="bx bxs-x-circle"></i>
        </button>
        <button className="bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 ease-in-out p-2 rounded-md">
          {taskToEdit ? 'Guardar cambios' : 'Crear Tarea'}
        </button>
      </form>
    </section>
  );
};

export default ModalTask;
