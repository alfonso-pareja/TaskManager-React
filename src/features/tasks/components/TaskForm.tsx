import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../../components/ui/Button';
import { Input } from '../../../components/ui/Input';
import { Card, CardContent } from '../../../components/ui/Card';
import { useTaskStore } from '../store/useTaskStore';

export function TaskForm() {
  const addTask = useTaskStore((state) => state.addTask);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask(title, description || undefined);
    setTitle('');
    setDescription('');
  };

  return (
    <Card className="mb-6">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
          <div className="flex-1 space-y-2">
            <Input
              placeholder="Agregar una nueva Tarea..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="font-medium"
            />
            <Input
              placeholder="Descripcion (opcional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="text-sm text-gray-500"
            />
          </div>
          <Button type="submit" size="lg" className="h-auto shrink-0">
            <Plus className="mr-2 h-4 w-4" />
            Agregar Tarea
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

