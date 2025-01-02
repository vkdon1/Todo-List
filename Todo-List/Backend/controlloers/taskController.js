let tasks = [];

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: 'Title is required' });
  }
  const newTask = { id: Date.now(), title, completed: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

exports.updateTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id == id);
  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }
  task.completed = !task.completed;
  res.json(task);
};

exports.deleteTask = (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter((task) => task.id != id);
  res.status(204).end();
};
