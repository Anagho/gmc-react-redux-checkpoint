import './App.css'
import AddTask from './components/AddTask'
import ListTask from './components/ListTask';

function App() {

  return (
    <section className="grid place-items-center min-h-screen">
      <div className="w-full max-w-md shadow-md p-4 bg-white rounded-md">
        <h1 className="text-2xl font-medium text-gray-500 text-center mb-4">
          My Task App
        </h1>
        <AddTask />
        <ListTask />
      </div>
    </section>
  );
}

export default App
