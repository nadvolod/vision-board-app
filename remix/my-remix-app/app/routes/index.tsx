// app/routes/index.tsx
import { json, useLoaderData } from '@remix-run/data';
import type { LinksFunction, LoaderFunction } from 'remix';

export let links: LinksFunction = () => {
  return [{ rel: 'stylesheet', href: '/styles/index.css' }];
};

export let loader: LoaderFunction = async () => {
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
  ];
  return json(goals);
};

export default function Index() {
  const goals = useLoaderData<Array<any>>();
  
  const handleClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.requestFullscreen();
  };

  return (
    <div className="container">
      <h1>Remix Vision Board</h1>
      <div className="grid">
        {goals.map((goal) => (
          <div className="grid-item" key={goal.id}>
            <p className="due-date">Due: {goal.dueDate}</p>
            <img
              src={goal.imageUrl}
              alt={goal.description}
              onClick={handleClick}
            />
            <p className="description">{goal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
