import { useTaskStore } from '../store/useTaskStore';
import { TaskItem } from './TaskItem';

export function TaskList() {
  const { tasks, filter } = useTaskStore();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    return task.status === filter;
  });
  

  if (filteredTasks.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg border border-dashed text-gray-500">
        No se encontraron tareas.
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
}
