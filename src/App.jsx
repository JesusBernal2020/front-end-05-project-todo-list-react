import "./App.css";
import Header from "./components/Header";
import ModalTask from "./components/ModalTask";

function App() {
  return (
    <main className="bg-black min-h-screen font-['Roboto'] text-white">
      <Header />
      <ModalTask />
    </main>
  );
}

export default App;
