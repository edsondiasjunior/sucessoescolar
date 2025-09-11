import Button from "./Button";
export default function Cta() {
  return (
    <section className="container mx-auto px-4 relative py-24 bg-gray-100 ">
      <div className="flex flex-col gap-8 bg-[var(--purple)] max-w-[1440px] h-[300px] px-4 py-8 items-center justify-center rounded-2xl lg:rounded-4xl relative ">
      <img className="absolute z-3 top-[-20px] left-[-20px] max-w-[100px] lg:max-w-[300px] lg:left-[40px] lg:top-[-40px] " src="/object_cta.webp" alt="" />

        <h2 className="text-center text-white font-bold text-4xl lg:text-5xl lg:max-w-2xl 2xl:text-6xl  2xl:max-w-3xl">
          O futuro depende o que plantamos hoje
        </h2>
        <Button text="Quero o Ebook" link="/" secondary />
      <img className="absolute z-3 bottom-[-20px] right-[-20px] max-w-[100px] lg:max-w-[300px] lg:rotate-80 lg:bottom-[-40] lg:right-[40px]" src="/object_cta.webp" alt="" />
      </div>
    </section>
  );
}
