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
  const [goals] = useState(initialGoals);
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const onOpenModal = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const onCloseModal = () => {
    setOpen(false);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + goals.length) % goals.length);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % goals.length);
  };

  return (
    <div className="grid grid-cols-3 gap-4 h-screen w-screen p-4 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300">
      {goals.map((goal, index) => (
        <div
          key={goal.id}
          className="border-2 border-indigo-200 rounded-lg p-4 h-full w-full flex flex-col justify-between bg-white bg-opacity-90 shadow-xl"
          onClick={() => onOpenModal(index)}
        >
          <h3 className="text-lg font-bold mb-2 text-indigo-800">{goal.description}</h3>
          <p className="text-indigo-600">Due date: {goal.dueDate}</p>
          <img
            src={goal.imageUrl}
            alt="Goal"
            className="mt-2 w-full h-auto flex-grow rounded-lg object-cover cursor-pointer"
          />
        </div>
      ))}
      <Modal open={open} onClose={onCloseModal} center>
        <div className="w-screen h-screen flex flex-col justify-between">
          <img src={goals[currentIndex].imageUrl} alt="Goal" className="w-full h-auto mt-2" />
          <div className="flex justify-between mt-4">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
          <button
            className="absolute top-4 right-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={onCloseModal}
          >
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default VisionBoard;