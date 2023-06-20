import Image from 'next/image';
import { HomeContainer, Product } from '../styles/pages/home';

import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import camiseta01 from '../assets/camisetas/1.png';
import camiseta02 from '../assets/camisetas/2.png';
import camiseta03 from '../assets/camisetas/3.png';

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <Product className="keen-slider__slide">
        <Image src={camiseta01} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta02} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={camiseta03} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 79,98</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}
