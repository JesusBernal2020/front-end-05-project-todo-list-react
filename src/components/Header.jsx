const Header = () => {
  return (
    <header className="flex justify-between p-2">
      <h1 className="text-2xl font-bold">
        <i className="bx bx-task mr-2 text-emerald-400"></i>To
        <span className=" text-emerald-400">Do</span>
      </h1>
      <button className="bg-emerald-400 hover:bg-emerald-500 transition-all duration-300 ease-in-out p-2 rounded-md">
        Crear Tarea
      </button>
    </header>
  );
};

export default Header;
