import Button from "./Button";

export default function Hero() {
  return (
    <section className="container max-w-[1440px] px-4 py-8 mx-auto flex flex-col gap-8 lg:flex-row items-center bg-white lg:px-8 lg:justify-between ">
      <div className="flex flex-col gap-12  ">

        <div className="flex flex-col items-center gap-4 lg:items-start">
          <img className="max-w-[30%]" src="/object_hero.webp" alt="Imagem decorativa" />
          <h1 className="text-center font-bold text-4xl text-[var(--dark-color)] lg:text-start lg:text-6xl 2xl:text-7xl">
            Construindo o <span className="text-[var(--purple-light)]">sucesso escolar </span>
          </h1>
          <p className="text-[1rem] text-center text-[var(--gray)] lg:text-start lg:max-w-2xl ">
            Um ebook com dicas preciosas para você começar a aplicar ainda hoje,
            e perceber os resultados já nas próximas avaliações do seu filho.
          </p>
          <Button text="Quero o Ebook" link="/"/>
        </div>
        <div className="bg-[#e9ecf1] outline-8 outline-[#f2f4f7d0] rounded-full flex gap-8 items-center justify-center py-8 px-5 lg:rounded-l-3xl lg:rounded-r-full lg:max-w-[500px]">
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-3xl text-[var(--pink)] lg:text-4xl">+150</h4>
            <p className="text-[var(--gray)] text-[.8rem]/tight lg:text-[1rem]/tight">Famílias ajudadas</p>
          </div>
          <div className="flex items-center gap-2">
            <h4 className="font-bold text-3xl text-[var(--pink)] lg:text-4xl">+13</h4>
            <p className="text-[var(--gray)] text-[.8rem]/tight">Anos de experiência</p>
          </div>
          
        </div>
      </div>
      <img className="lg:max-w-[45%]" src="/capa_ebook_hero.webp" alt="Capa Ebook" />
    </section>
  );
}
