const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <li
      className={`flex justify-between items-center py-2 ${
        task.completed ? "line-through text-gray-500" : ""
      }`}>
      {task.title}
      <div>
        <button
          onClick={() => onToggle(task.id)}
          className="text-green-500 mr-2">
          Toggle
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-500">
          Delete
        </button>
      </div>
    </li>
  );
};

export default TaskItem;
