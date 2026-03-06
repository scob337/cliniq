
type ButtonProps = {
  text: string;
  onClick ?: () => void;
bgColor:string;
textColor?:string;
}

const Button = ({ text, onClick, bgColor, textColor }: ButtonProps) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: bgColor,
        color: textColor || "#fff",
      }}
      className="px-4 py-2 rounded-md w-fit cursor-pointer"
    >
      {text}
    </div>
  );
};

export default Button
