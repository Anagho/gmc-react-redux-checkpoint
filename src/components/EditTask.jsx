import { useState } from "react";
import { Modal, Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { editTask } from "../features/task/taskSlice";
import { useDispatch } from "react-redux";

const { TextArea } = Input;

function EditTask(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [updateTaskDescription, setUpdateTaskDescription] = useState(
    props.description
  );

  const dispatch = useDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    if (updateTaskDescription.trim() === "") {
      return;
    }

    dispatch(
      editTask({
        taskId: props.taskId,
        update_task_description: updateTaskDescription.trim(),
      })
    );
    console.log(props.noteId);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Button
        icon={<EditOutlined className="text-blue-500" title="Edit Task" />}
        onClick={showModal}
      />

      <Modal
        title="Edit task descriptioin"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <h2>Editing task with id: {props.taskId}</h2>

        <TextArea
          value={updateTaskDescription}
          onChange={(event) => setUpdateTaskDescription(event.target.value)}
          placeholder="Start typing to edit task"
          autoSize={{
            minRows: 4,
            maxRows: 6,
          }}
        />
      </Modal>
    </>
  );
}

export default EditTask;
