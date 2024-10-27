interface ButtonProps {
  text: string;
  onclick?: (e?: any) => void;
  style: string;
}

const basic = `
h-10 w-fit rounded-md bg-amber-200 px-7
 
`;
const long = `
   w-full rounded-md bg-amber-200 px-7 h-10 
`;

function Button({ text, onclick, style }: ButtonProps) {
  return (
    <button onClick={onclick} className={`${style === "long" ? long : basic}`}>
      <span>{text}</span>
    </button>
  );
}
export default Button;
