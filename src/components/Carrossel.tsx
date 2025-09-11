import CardDepo from "./ui/cardDepoimentos";

// import Swiper core and required modules
import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      <SwiperSlide>
        <CardDepo
          text="Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!"
          img="/ana_clara.webp"
          alt="Ana Clara"
          name="Ana Clara"
          description="Mãe do Guilherme 12 anos"
        />
      </SwiperSlide>
      <SwiperSlide>
        
        <CardDepo
          text="Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!"
          img="/ana_clara.webp"
          alt="Ana Clara"
          name="Ana Clara"
          description="Mãe do Guilherme 12 anos"
        />
      </SwiperSlide>
      <SwiperSlide>
        
        <CardDepo
          text="Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!"
          img="/ana_clara.webp"
          alt="Ana Clara"
          name="Ana Clara"
          description="Mãe do Guilherme 12 anos"
        />
      </SwiperSlide>
      <SwiperSlide>
        
        <CardDepo
          text="Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!"
          img="/ana_clara.webp"
          alt="Ana Clara"
          name="Ana Clara"
          description="Mãe do Guilherme 12 anos"
        />
      </SwiperSlide>
      
    </Swiper>
  );
};
