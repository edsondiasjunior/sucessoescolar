import CardDepo from "./ui/cardDepoimentos";

// Import Swiper core and required modules
import { Navigation,  A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    id: 1,
    text: "Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!",
    img: "/ana_clara.webp",
    alt: "Ana Clara",
    name: "Ana Clara",
    description: "Mãe do Guilherme 12 anos"
  },
  {
    id: 2,
    text: "Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!",
    img: "/ana_clara.webp",
    alt: "Ana Clara",
    name: "Ana Clara",
    description: "Mãe do Guilherme 12 anos"
  },
  {
    id: 3,
    text: "Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!",
    img: "/ana_clara.webp",
    alt: "Ana Clara",
    name: "Ana Clara",
    description: "Mãe do Guilherme 12 anos"
  },
  {
    id: 4,
    text: "Mah, queria compartilhar com você que o ebook foi um divisor de águas aqui em casa! Eu tinha muita dificuldade em estabelecer uma rotina de estudos pro João e depois de ler o ebook e começar a colocar em prática, já estou sentindo muita diferença. Inclusive as notas nos testes semanais já melhoraram. Obrigada por um conteúdo tão rico e ao mesmo tempo simples e objetivo. Recomendo para todas as famílias!",
    img: "/ana_clara.webp",
    alt: "Ana Clara",
    name: "Ana Clara",
    description: "Mãe do Guilherme 12 anos"
  }
];

const Carrossel = () => {
  return (
    <Swiper
      modules={[Navigation, A11y]}
      spaceBetween={20}
      slidesPerView={1.1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
    >
      {testimonials.map((testimonial) => (
        <SwiperSlide key={testimonial.id}>
          <CardDepo
            text={testimonial.text}
            img={testimonial.img}
            alt={testimonial.alt}
            name={testimonial.name}
            description={testimonial.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrossel;