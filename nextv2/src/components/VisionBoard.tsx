// components/VisionBoard.tsx
import React, { useState } from 'react';
import Modal from 'react-responsive-modal';

interface Goal {
  id: number;
  description: string;
  dueDate: string;
  imageUrl: string;
}

const initialGoals: Goal[] = [
  {
    id: 1,
    description: 'Learn a new programming language',
    dueDate: '2023-08-01',
    imageUrl: 'https://via.placeholder.com/300x200?text=Learn+Programming',
  },
  {
    id: 2,
    description: 'Complete a marathon',
    dueDate: '2023-10-15',
    imageUrl: 'https://via.placeholder.com/300x200?text=Marathon',
  },
  {
    id: 3,
    description: 'Read 12 books',
    dueDate: '2023-12-31',
    imageUrl: 'https://via.placeholder.com/300x200?text=Read+Books',
  },
  {
    id: 4,
    description: 'Travel to 3 new countries',
    dueDate: '2024-01-31',
    imageUrl: 'https://via.placeholder.com/300x200?text=Travel',
  },
  {
    id: 5,
    description: 'Achieve a healthy weight',
    dueDate: '2023-11-30',
    imageUrl: 'https://via.placeholder.com/300x200?text=Healthy+Weight',
  },
  {
    id: 6,
    description: 'Start a side business',
    dueDate: '2024-02-28',
    imageUrl: 'https://via.placeholder.com/300x200?text=Side+Business',
  },
  {
    id: 7,
    description: 'Learn a new musical instrument',
    dueDate: '2023-09-30',
    imageUrl: 'https://via.placeholder.com/300x200?text=Learn+Music',
  },
  {
    id: 8,
    description: 'Volunteer for a cause',
    dueDate: '2023-12-31',
    imageUrl: 'https://via.placeholder.com/300x200?text=Volunteer',
  },
  {
    id: 9,
    description: 'Improve personal relationships',
    dueDate: '2023-12-31',
    imageUrl: 'https://via.placeholder.com/300x200?text=Relationships',
  },
];

const VisionBoard: React.FC = () => {
  const [goals] = useState<Goal[]>(initialGoals);
  const [open, setOpen] = useState(false);
  const [currentGoalIndex, setCurrentGoalIndex] = useState(0);

  const onOpenModal = (index: number) => {
    setCurrentGoalIndex(index);
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const onNext = () => {
    setCurrentGoalIndex((currentGoalIndex + 1) % goals.length);
  };

  const onPrevious = () => {
    setCurrentGoalIndex((currentGoalIndex - 1 + goals.length) % goals.length);
  };

  return (
    <div data-testid="vision-board-grid" className="grid grid-cols-3 gap-4 h-screen w-screen p-4 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300">
      {goals.map((goal, index) => (
        <div
          key={goal.id}
          data-testid={`vision-board-item-${index}`}
          className="border-2 border-indigo-200 rounded-lg p-4 h-full w-full flex flex-col justify-between bg-white bg-opacity-90 shadow-xl"
          onClick={() => onOpenModal(index)}
        >
          <img className="object-cover h-2/3 w-full rounded-lg" src={goal.imageUrl} alt={goal.title} />
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">{goal.title}</h3>
            <p className="text-indigo-500">Due Date: {goal.dueDate}</p>
          </div>
        </div>
      ))}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-screen h-screen flex flex-col justify-between">
          <img className="object-cover h-screen w-screen" src={goals[currentGoalIndex].imageUrl} alt={goals[currentGoalIndex].title} />
          {open && (
            <>
              <button
                data-testid="modal-close-button"
                className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                onClick={onCloseModal}
              >
                Close
              </button>
              <button
                className="absolute bottom-4 left-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={onPrevious}
              >
                Previous
              </button>
              <button
                className="absolute bottom-4 right-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={onNext}
              >
                Next
              </button>
            </>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default VisionBoard;