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
    <div className="grid grid-cols-3 gap-4">
      {goals.map((goal) => (
        <div key={goal.id} className="border rounded p-4">
          <h3 className="text-lg font-bold mb-2">{goal.description}</h3>
          <p>Due date: {goal.dueDate}</p>
          <img src={goal.imageUrl} alt="Goal" className="mt-2 w-full h-auto" />
        </div>
      ))}
    </div>
  );
};

export default VisionBoard;