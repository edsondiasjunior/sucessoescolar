

interface CardProps{
    text: string;
    img:string;
    alt: string;
    name: string;
    description:string;
}

export default function cardDepoimentos({text, img, alt, name, description}: CardProps){
    return(
        <article className="bg-white p-8 rounded-2xl flex flex-col gap-8 ">
            <p className="text-[.9rem]">{text}</p>
            <div className="flex gap-4 items-center">
                <img className="w-13" src={img} alt={alt} />
                <div>
                    <h4 className="text-[1.2rem] font-bold text-[var(--purple)]">{name}</h4>
                    <p className="text-[var(--gray)] text-[.8rem]/[.9rem]">{description}</p>
                </div>
            </div>
        </article>
    )
}