import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNewTask } from "../features/task/taskSlice";
import { Button, Input, Divider } from "antd";
 import { ToastContainer, toast } from "react-toastify";

function AddTask() {
  const [taskDescription, setTaskDescription] = useState("");
  const dispatch = useDispatch();

  // Function to show toast notification
  const notify = () => toast.error("Task cannot be empty");

  // function to add task
  const handleAddTask = () => {
    // check if task description field is empty
    if (taskDescription.trim() === "") {
      notify();
      return;
    }

    // use the dispatch to call the addNewTask function because the function is coming from redux
    dispatch(addNewTask(taskDescription.trim()));
    console.log(taskDescription);
    setTaskDescription("");
  };

  return (
    <div className="grid gap-4 mb-4">
      <Input
        className="text-[1rem]"
        value={taskDescription}
        onChange={(event) => setTaskDescription(event.target.value)}
        placeholder="Enter task description"
        size="large"
      />
      <Button
        onClick={handleAddTask}
        className="bg-gray-700 text-white"
        size="large"
        block
      >
        Add Task
      </Button>
      <ToastContainer autoClose={3000} />
      <Divider />
    </div>
  );
}

export default AddTask;
