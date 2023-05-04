import { ArrowBack, ArrowForward, Close } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Container, Grid, IconButton, Modal, Typography } from '@mui/material';
import { useState } from 'react';

interface Goal {
  image: string;
  description: string;
  date: string;
}

const goals: Goal[] = [
  {
    image: 'https://via.placeholder.com/300x200?text=Goal%201',
    description: 'Goal 1',
    date: '2023-06-01',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Goal%202',
    description: 'Goal 2',
    date: '2023-07-15',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Goal%203',
    description: 'Goal 3',
    date: '2023-09-30',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Goal%204',
    description: 'Goal 4',
    date: '2023-12-25',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Goal%205',
    description: 'Goal 5',
    date: '2024-01-10',
  },
  {
    image: 'https://via.placeholder.com/300x200?text=Goal%206',
    description: 'Goal 6',
    date: '2024-03-21',
  },
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % goals.length);
  };

  const handleBack = () => {
    setCurrentIndex((currentIndex - 1 + goals.length) % goals.length);
  };

  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        {goals.map((goal, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardMedia component="img" image={goal.image} alt={goal.description} onClick={() => handleOpen(index)} />
              <CardContent>
                <Typography variant="h6">{goal.description}</Typography>
                <Typography variant="body2">{goal.date}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal open={open} onClose={handleClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div>
          <IconButton onClick={handleBack}>
            <ArrowBack />
          </IconButton>
          <img src={goals[currentIndex].image} alt={goals[currentIndex].description} style={{ maxHeight: '90vh', maxWidth: '90vw' }} />
          <IconButton onClick={handleNext}>
            <ArrowForward />
          </IconButton>
          <IconButton onClick={handleClose} style={{ position: 'absolute', top: 0, right: 0 }}>
            <Close />
          </IconButton>
        </div>
      </Modal>
    </Container>
  );
}
