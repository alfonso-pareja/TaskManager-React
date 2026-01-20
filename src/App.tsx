import { TaskForm } from './features/tasks/components/TaskForm';
import { TaskList } from './features/tasks/components/TaskList';
import { TaskFilters } from './features/tasks/components/TaskFilters';

import './App.css'

function App() {

 return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto max-w-2xl px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900">Task Manager</h1>
          <p className="text-gray-500">Lista de Tareas</p>
        </header>

        <main>
          <TaskForm />
          <TaskFilters />
          <TaskList />
        </main>
      </div>
    </div>
  );
}

export default App
