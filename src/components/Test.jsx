import React from 'react'

function Test() {
  return (
    <div>
      <section
        className={`task-container p-4 mb-2 rounded-md shadow  ${
          task.isDone ? "line-through text-gray-600 bg-green-300" : ""
        }`}
      >
        {isEditing ? (
          <EditTask task={task} onCancel={() => setIsEditing(false)} />
        ) : (
          <div className="flex justify-between">
            {/* Task description and creation date */}
            <div className="flex items-center gap-3">
              <Checkbox
                checked={task.isDone}
                onChange={handleToggleStatus}
                className="task-checkbox"
              />
              <div>
                <h3 className={`font-semibold text-xl`}>{task.description}</h3>
                <p className="text-xs text-gray-500">{task.createdAt}</p>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex gap-2 items-center">
              {/* Edit button */}
              <Button
                type="link"
                icon={<EditOutlined />}
                onClick={() => setIsEditing(true)}
                title="Edit Task"
              />
              {/* Check/Uncheck button */}
              <Button
                type="link"
                icon={<CheckOutlined />}
                onClick={handleToggleStatus}
                title={task.isDone ? "Mark as Incomplete" : "Mark as Complete"}
              />
              {/* Undo/Refresh button */}
              <Button
                type="link"
                icon={<UndoOutlined />}
                onClick={handleToggleStatus}
                title="Undo"
              />
              {/* Delete button */}
              <Button
                type="link"
                icon={<DeleteOutlined />}
                onClick={handleDelete}
                danger
                title="Delete Task"
              />
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default Test