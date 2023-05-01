// components/VisionBoard.tsx
import React, { useState } from 'react';

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

  return (
    <div className="grid grid-cols-3 gap-4 h-screen w-screen p-4 bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-300">
      {goals.map((goal) => (
        <div
          key={goal.id}
          className="border-2 border-indigo-200 rounded-lg p-4 h-full w-full flex flex-col justify-between bg-white bg-opacity-90 shadow-xl"
        >
          <h3 className="text-lg font-bold mb-2 text-indigo-800">{goal.description}</h3>
          <p className="text-indigo-600">Due date: {goal.dueDate}</p>
          <img
            src={goal.imageUrl}
            alt="Goal"
            className="mt-2 w-full h-auto flex-grow rounded-lg object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default VisionBoard;