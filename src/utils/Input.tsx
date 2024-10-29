import { ReactNode } from "react";

interface inputProps {
  children: ReactNode;
  id: string;
  style: string;
  ref: React.Ref<HTMLInputElement>;
  //ref는 react의 ref타입인데요, input타입에 적용할꺼에용
}

export function Input({ children, id, style, ref }: inputProps) {
  return (
    <>
      <label htmlFor={id}>{children}</label>
      <input id={id} className={style} ref={ref} />
    </>
  );
}
