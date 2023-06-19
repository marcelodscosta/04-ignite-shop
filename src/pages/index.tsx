import { styled } from '../styles';

const Button = styled('button', {
  backgroundColor: '$green500',
  borderRadius: 4,
  padding: '4px 8px',
  border: 0,

  '&:hover': {
    filter: 'brightness(0.8)',
  },
});

export default function Home() {
  return <Button onClick={() => alert('Teste')}>Hello World</Button>;
}
