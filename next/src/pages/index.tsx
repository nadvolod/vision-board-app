// pages/index.tsx
import Image from 'next/image';
import { useState } from 'react';
import styles from '../styles/Home.module.css';

const goals = [
  {
    id: 1,
    dueDate: '2023-06-01',
    description: 'Complete a half marathon',
    imageUrl: 'https://via.placeholder.com/400x200?text=Half+Marathon',
  },
  {
    id: 2,
    dueDate: '2023-08-15',
    description: 'Learn to play the guitar',
    imageUrl: 'https://via.placeholder.com/400x200?text=Guitar+Lessons',
  },
  {
    id: 3,
    dueDate: '2023-12-31',
    description: 'Read 12 books',
    imageUrl: 'https://via.placeholder.com/400x200?text=Read+Books',
  },
  {
    id: 4,
    dueDate: '2023-09-30',
    description: 'Travel to Japan',
    imageUrl: 'https://via.placeholder.com/400x200?text=Travel+Japan',
  },
  {
    id: 5,
    dueDate: '2023-11-01',
    description: 'Start a YouTube channel',
    imageUrl: 'https://via.placeholder.com/400x200?text=YouTube+Channel',
  },
  {
    id: 6,
    dueDate: '2023-07-01',
    description: 'Learn a new language',
    imageUrl: 'https://via.placeholder.com/400x200?text=Learn+Language',
  },
  {
    id: 7,
    dueDate: '2023-10-15',
    description: 'Volunteer for a social cause',
    imageUrl: 'https://via.placeholder.com/400x200?text=Volunteer',
  },
  {
    id: 8,
    dueDate: '2023-06-30',
    description: 'Take a photography course',
    imageUrl: 'https://via.placeholder.com/400x200?text=Photography+Course',
  },
  {
    id: 9,
    dueDate: '2023-12-15',
    description: 'Improve cooking skills',
    imageUrl: 'https://via.placeholder.com/400x200?text=Cooking+Skills',
  },
];


export default function Home() {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);

  const handleClick = (imageUrl: string) => {
    setFullScreenImage(imageUrl);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
  <div className={styles.container}>
    <h1>Next.js Vision Board</h1>
    <div className={styles.grid}>
      {goals.map((goal) => (
        <div className={styles.gridItem} key={goal.id}>
          <p className={styles.dueDate}>Due: {goal.dueDate}</p>
          <Image
            src={goal.imageUrl}
            alt={goal.description}
            onClick={() => handleClick(goal.imageUrl)}
            width={400}
            height={200}
          />
          <p className={styles.description}>{goal.description}</p>
        </div>
      ))}
    </div>
    {fullScreenImage && (
      <div className={styles.fullscreen} onClick={closeFullScreen}>
        <Image src={fullScreenImage} alt="Fullscreen" width={800} height={800} />
      </div>
    )}
  </div>
);
}
