interface ButtonProps {
  text: string;
  onclick?: (e?: any) => void;
}

function Button({ text, onclick }: ButtonProps) {
  return (
    <button onClick={onclick} className="h-10 w-24 rounded-md bg-amber-200">
      {text}
    </button>
  );
}
export default Button;
