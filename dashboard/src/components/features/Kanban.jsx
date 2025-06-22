import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialData = {
  columns: {
    todo: {
      name: 'To Do',
      items: [
        { id: '1', content: 'Design UI' },
        { id: '2', content: 'Write Docs' },
      ],
    },
    inProgress: {
      name: 'In Progress',
      items: [
        { id: '3', content: 'Build Kanban' },
      ],
    },
    done: {
      name: 'Done',
      items: [
        { id: '4', content: 'Install Tailwind' },
      ],
    },
  },
};

const Kanban = () => {
  const [data, setData] = useState(initialData);

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = data.columns[source.droppableId];
    const destCol = data.columns[destination.droppableId];
    const sourceItems = [...sourceCol.items];
    const destItems = [...destCol.items];
    const [moved] = sourceItems.splice(source.index, 1);

    if (source.droppableId === destination.droppableId) {
      sourceItems.splice(destination.index, 0, moved);
      setData({
        columns: {
          ...data.columns,
          [source.droppableId]: {
            ...sourceCol,
            items: sourceItems,
          },
        },
      });
    } else {
      destItems.splice(destination.index, 0, moved);
      setData({
        columns: {
          ...data.columns,
          [source.droppableId]: {
            ...sourceCol,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destCol,
            items: destItems,
          },
        },
      });
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Kanban Board</h2>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(data.columns).map(([id, column]) => (
            <Droppable key={id} droppableId={id}>
              {(provided) => (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  className="bg-white dark:bg-gray-800 p-4 rounded shadow min-h-[300px]"
                >
                  <h3 className="text-lg font-semibold mb-2">{column.name}</h3>
                  {column.items.map((item, index) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="bg-blue-100 dark:bg-blue-900 text-black dark:text-white p-2 mb-2 rounded"
                        >
                          {item.content}
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Kanban;