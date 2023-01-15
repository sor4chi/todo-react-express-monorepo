import { Router, Request, Response } from 'express';
import * as TodoService from '../services/todo';

const router = Router();

const VALIDATIONS = {
  id: (id?: string) => isNaN(Number(id)) || Number(id) < 1,
  title: (title?: string) => typeof title !== 'string' || title.length === 0,
  completed: (completed?: string) =>
    completed === 'true' || completed === 'false',
};

router.get('/', async (req: Request, res: Response) => {
  const data = await TodoService.todoIndex();
  res.json(data);
});

router.get('/:id', async (req: Request, res: Response) => {
  if (VALIDATIONS.id(req.params.id)) {
    res.status(400).send('INVALID PARAMS');
    return;
  }
  const data = await TodoService.todoShow({ id: Number(req.params.id) });
  if (!data) {
    res.status(404).send('NOT FOUND');
    return;
  }
  res.json(data);
});

router.post('/', async (req: Request, res: Response) => {
  const { title, completed } = req.body;
  if (VALIDATIONS.title(title) || VALIDATIONS.completed(completed)) {
    res.status(400).send('INVALID PARAMS');
    return;
  }
  const data = await TodoService.todoCreate({ title, completed });
  res.json(data);
});

router.put('/:id', async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const { title, completed } = req.body;
  if (
    VALIDATIONS.id(req.params.id) ||
    VALIDATIONS.title(title) ||
    VALIDATIONS.completed(completed)
  ) {
    res.status(400).send('INVALID PARAMS');
    return;
  }
  const data = await TodoService.todoUpdate({ id, title, completed });
  res.json(data);
});

router.delete('/:id', async (req: Request, res: Response) => {
  if (VALIDATIONS.id(req.params.id)) {
    res.status(400).send('INVALID PARAMS');
    return;
  }
  const data = await TodoService.todoDelete({ id: Number(req.params.id) });
  res.json(data);
});

export { router as user };
