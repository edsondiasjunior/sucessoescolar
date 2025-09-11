interface ButtonProps {
    text: string;
    link: string;
    secondary?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, link, secondary = false }) => {
  // Se secondary = true → rosa, se não → roxo
  const bgColor = secondary ? "bg-[var(--pink)] hover:bg-pink-600" : "bg-[var(--purple)] hover:bg-purple-700";
  
  return (
    <a 
      className={`${bgColor} px-6 py-3 rounded-full text-white font-bold transition-colors duration-200`}
      href={link}
    >
      {text}
    </a>
  );
};


export default Button;

