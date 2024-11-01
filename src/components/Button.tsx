interface ButtonProps {
  text: string;
  onclick?: (e?: any) => void;
  style: string;
}

const basic = `
h-10 w-fit rounded-md bg-highlight px-7 font-hightlight 
 
`;
const long = `
   w-full rounded-md bg-highlight px-7 h-10 font-hightlight
`;

function Button({ text, onclick, style }: ButtonProps) {
  return (
    <button onClick={onclick} className={`${style === "long" ? long : basic}`}>
      <span>{text}</span>
    </button>
  );
}
export default Button;
