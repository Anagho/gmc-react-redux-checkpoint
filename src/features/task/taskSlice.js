import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = {
  userTasks: JSON.parse(localStorage.getItem("tasks")) || [],
  filter: "all",
};

export const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    // *** Action to add a task
    addNewTask: (state, action) => {
      const date = new Date();
      state.userTasks = [
        {
          task_id: Math.floor(Math.random() * 999),
          description: action.payload,
          isDone: false, // New tasks are not done by default
          createdAt: date.toDateString(),
        },
        ...state.userTasks, // Append existing tasks after the new one
      ];

      // Save the updated task list in localStorage
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // *** Action to toggle task 'isDone' status (mark done/not done)
    toggleTaskStatus: (state, action) => {
      // Find the task by its ID
      const task = state.userTasks.find((id) => id.task_id === action.payload);
      if (task) {
        // Toggle the isDone property
        task.isDone = !task.isDone;
      }
      // Save the updated task list in localStorage
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // *** Action to edit & update the task description
    editTask: (state, action) => {
      const updatedTasks = state.userTasks.map((item) => {

        // check for the note with the id that was clicked on
        if (item.task_id === action.payload.taskId) {
          // update the content of the note with the exact id
          item.description = action.payload.update_task_description;
        }

        return item;
      });

      state.userTasks = updatedTasks;
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // *** Action to delete a task
    deleteTask: (state, action) => {
      const updatedTasks = state.userTasks.filter(
        (task) => task.task_id !== action.payload
      );

      state.userTasks = updatedTasks;
      // Save the updated task list in localStorage
      localStorage.setItem("tasks", JSON.stringify(state.userTasks));
    },

    // ** Action to filter the tasks ('all', 'done', 'not done')
    setFilter: (state, action) => {
      //  Update the filter state
      state.filter = action.payload;
    },
  },
});

// Export actions for use in components
export const { addNewTask, toggleTaskStatus, editTask, deleteTask, setFilter } =
  taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;
