interface CardProps {
  icon: string;
  alt: string;
  title: string;
  text: string;
}

export default function Card({ icon, alt, title, text }: CardProps) {
  return (
    <article className="bg-white flex max-[380px]:flex-col max-[380px]:items-start  items-center justify-center p-6 gap-4 rounded-3xl lg:p-10 xl:h-42 xl:px-16">
      <img className="w-12 h-12 lg:w-16 lg:h-16" src={icon} alt={alt} />
      <div className="flex flex-col gap-2">
        <h3 className="text-[1.2rem] font-medium text-[var(--dark-color)]">{title}</h3>
        <p className="text-[.9rem]/[1.2rem] text-[var(--gray)] w-fill lg:text-base">
          {text}
        </p>
      </div>
    </article>
  );
}
