const ModalTask = () => {
  return (
    <section className="fixed top-0 left-0 right-0 bottom-0 bg-emerald-400/25 flex justify-center items-center">
      <form className="grid relative gap-6 w-[270px] bg-black p-4 rounded-xl">
        <h3 className="text-center text-2xl font-bold">Nueva Tarea</h3>
        <div className="grid gap-1">
          <label htmlFor="title">Titulo</label>
          <input
            className="text-black rounded-md p-2 outline-none"
            id="title"
            type="text"
          />
        </div>
        <div className="grid gap-1">
          <label htmlFor="">Descripcion</label>
          <textarea
            className="text-black rounded-md p-2 outline-none"
            id=""
            rows="6"
          ></textarea>
        </div>
        <button
          type="button"
          className="absolute top-2 right-2 text-xl text-emerald-400 hover:text-emerald-500 transition-all duration-300 ease-in-out "
        >
          <i className="bx bxs-x-circle"></i>
        </button>
        <button className="bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 ease-in-out p-2 rounded-md">
          Crear tarea
        </button>
      </form>
    </section>
  );
};

export default ModalTask;
