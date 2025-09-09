interface ButtonProps {
    text: string;
    link: string;
}

const Button: React.FC<ButtonProps> = ({text, link}) =>{
    return(
        <a className="bg-[var(--purple)] px-6 py-3 rounded-full text-white font-bold" href={link}>{text}</a>
    )
}

export default Button;

