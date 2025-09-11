import Carrossel from "./Carrossel"

export function Depoimentos() {
  return (
    <section className="h-[100vh]">
      <div className="container mx-auto px-4">
        <div className="col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-2 lg:items-start">
            <p className="text-[1.2rem]  font-medium  text-[var(--pink)] uppercase lg:text-start lg:text-[1.4rem] lg:max-w-2xl -tracking-tighter ">
              Depoimentos
            </p>
            <h2 className="text-start font-bold text-4xl text-[var(--dark-color)] lg:text-4xl xl:text-5xl">
              O que as famílias estão dizendo
            </h2>
          </div>
        </div>
      </div>

      <div>
        <Carrossel/>
      </div>
    </section>
  );
}
