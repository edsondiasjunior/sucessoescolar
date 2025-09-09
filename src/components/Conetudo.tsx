import Card from "./ui/Card";
export default function Conteudo() {
  return (
    <section className=" bg-gray-100 py-24 lg:px-8 ">

      <div className="container max-w-[1440px] mx-auto px-4 flex flex-col gap-8 lg:flex-row grid-cols-5 lg:gap-8 xl:gap-0 ">

        <div className="col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-2 lg:items-start">
            <p className="text-[1.2rem]  font-medium  text-[var(--pink)] uppercase lg:text-start lg:text-[1.4rem] lg:max-w-2xl -tracking-tighter ">
              Conteúdo
            </p>
            <h2 className="text-start font-bold text-4xl text-[var(--dark-color)] lg:text-4xl xl:text-5xl">
              O que você vai encontrar no ebook
            </h2>
          </div>
          <img className="hidden lg:block xl:max-w-[450px]" src="/foto_conteudo_desktop.webp" alt="" />
          <img className="block lg:hidden xl:max-w-[450px]" src="/foto_conteudo_mobile.webp" alt="" />
        </div>

        <div className="flex flex-col gap-4 col-span-3">
          <Card
            icon="/icon_balo_1x.webp"
            alt="Ícone de balão"
            title="Desperte o Interesse"
            text="Argumentos científicos que realmente motivam seu filho a estudar, mesmo quando outras estratégias falharam."
          />
          <Card
            icon="/icon_cerebro_1x.webp"
            alt="Ícone de balão"
            title="Personalização Inteligente"
            text="Como identificar o nível de desenvolvimento pedagógico do seu filho e adaptar o aprendizado às suas necessidades."
          />
          <Card
            icon="/icon_lampada_1x.webp"
            alt="Ícone de balão"
            title="Transformação Diária"
            text="Dicas práticas de bons hábitos que influenciam diretamente na aprendizagem e no desempenho escolar."
          />
          <Card
            icon="/icon_medalha_1x.webp"
            alt="Ícone de balão"
            title="Expertise Validada"
            text="Método validado por profissional com 13 anos de experiência que já transformou a rotina de +150 famílias."
          />
          <Card
            icon="/icon_foguete_1x.webp"
            alt="Ícone de balão"
            title="Sistema Exclusivo"
            text="Estratégia CCC exclusiva para construir uma rotina de estudos produtiva que gera resultados reais."
          />
        </div>

      </div>
    </section>
  );
}
