import { AppProps } from 'next/app';

import Image from 'next/image';

import LogoSvg from '../assets/logo.svg';
import { globalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/App';

globalStyles();
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoSvg} alt="Logo" />
      </Header>
      <Component {...pageProps} />
    </Container>
  );
}
