import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../features/task/taskSlice";
import Task from "./Task";
import { Select } from "antd";

const ListTask = () => {
  const { userTasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  // Filter tasks based on the selected filter value
  const filteredTasks = userTasks.filter((task) => {
    if (filter === "done") return task.isDone;
    if (filter === "not done") return !task.isDone;
    return true; // If the filter is 'all', return all tasks
  });

  return (
    <div>
      <span className="text-gray-700">Filter Tasks: </span>
      <Select
        value={filter}
        onChange={(value) => dispatch(setFilter(value))}
        style={{ width: 200, marginBottom: 20 }}
      >
        <Select.Option value="all">All</Select.Option>
        <Select.Option value="done">Done</Select.Option>
        <Select.Option value="not done">Not Done</Select.Option>
      </Select>

      {/* Render Task components */}
      {filteredTasks.map((task) => (
        <Task key={task.task_id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
