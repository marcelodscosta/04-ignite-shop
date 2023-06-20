import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';

import camiseta01 from '../assets/camisetas/1.png';
import camiseta02 from '../assets/camisetas/2.png';
// import camiseta03 from '../assets/camisetas/3.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={camiseta01} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
