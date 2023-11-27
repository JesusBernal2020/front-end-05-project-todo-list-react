import './App.css';
import Header from './components/Header';
import ModalTask from './components/ModalTask';
import TaskList from './components/TaskList';

function App() {
  return (
    <main className="fondo font-['Roboto'] text-white">
      <Header />
      <ModalTask />
      <TaskList />
    </main>
  );
}

export default App;
