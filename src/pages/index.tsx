import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 8,
  padding: '8px 6px',
  border: 0,

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});

export default function Home() {
  return <Button onClick={() => alert('Teste')}>Hello World</Button>;
}
