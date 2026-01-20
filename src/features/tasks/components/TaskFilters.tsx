import { useTaskStore } from '../store/useTaskStore';
import { Button } from '../../../components/ui/Button';
import { type TaskFilter } from '../types';

export function TaskFilters() {
  const { filter, setFilter } = useTaskStore();

  const filters: { value: TaskFilter; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'todo', label: 'Por Hacer' },
    { value: 'in-progress', label: 'En Progreso' },
    { value: 'done', label: 'Completado' },
  ];

  return (
    <div className="flex gap-2 pb-4">
      {filters.map((f) => (
        <Button
          key={f.value}
          variant={filter === f.value ? 'default' : 'outline'}
          size="sm"
          onClick={() => setFilter(f.value)}
        >
          {f.label}
        </Button>
      ))}
    </div>
  );
}
