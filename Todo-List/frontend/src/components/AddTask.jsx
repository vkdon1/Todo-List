const AddTask = ({ newTask, setNewTask, onAddTask }) => {
  return (
    <div className="flex mb-4">
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="border border-blue-300 rounded px-3 py-2 flex-1"
      />
      <button
        onClick={onAddTask}
        className="ml-2 bg-blue-200 text-white px-4 py-2 rounded">
        Add Task
      </button>
    </div>
  );
};

export default AddTask;
