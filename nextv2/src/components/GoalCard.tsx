// src/components/GoalCard.tsx
import React from 'react';

interface Goal {
  id: number;
  imageUrl: string;
  dueDate: string;
  description: string;
}

interface GoalCardProps {
  goal: Goal;
}

const GoalCard: React.FC<GoalCardProps> = ({ goal }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <img src={goal.imageUrl} alt={goal.description} className="w-full h-40 object-cover rounded-md mb-2" />
      <h3 className="text-xl font-semibold">{goal.description}</h3>
      <p className="text-gray-500">Due: {goal.dueDate}</p>
    </div>
  );
};

export default GoalCard;
