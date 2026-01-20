import { Trash2, CheckCircle, Circle } from 'lucide-react';
import { format } from 'date-fns';
import { type Task } from '../types';
import { useTaskStore } from '../store/useTaskStore';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { cn } from '../../../lib/utils';

interface TaskItemProps {
  task: Task;
}

export function TaskItem({ task }: TaskItemProps) {
  const { updateTask, deleteTask } = useTaskStore();

  const toggleStatus = () => {
    const newStatus = task.status === 'done' ? 'todo' : 'done';
    updateTask(task.id, { status: newStatus });
  };

  const priorityColor = {
    low: 'bg-green-100 text-green-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800',
  };

  return (
    <Card className={cn('transition-all hover:shadow-md', task.status === 'done' && 'opacity-60')}>
      
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-6 w-6" onClick={toggleStatus}>
            {task.status === 'done' ? (
              <CheckCircle className="h-5 w-5 text-green-500" />
            ) : (
              <Circle className="h-5 w-5 text-gray-400" />
            )}
          </Button>
          <CardTitle className={cn('text-lg font-medium', task.status === 'done' && 'line-through')}>
            {task.title}
          </CardTitle>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-red-500 hover:bg-red-50 hover:text-red-600"
          onClick={() => deleteTask(task.id)}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </CardHeader>

      <CardContent>
        {task.description && <p className="mb-2 text-sm text-gray-500">{task.description}</p>}
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className={cn('rounded-full px-2 py-0.5 font-medium', priorityColor[task.priority])}>
            {task.priority}
          </span>
          <span>{format(task.createdAt, 'MMM d, yyyy')}</span>
        </div>
      </CardContent>

    </Card>
  );
}
