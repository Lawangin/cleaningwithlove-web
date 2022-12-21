import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Button = ({ children, type, className }: IProps): JSX.Element => {
  return (
    <div className={className}>
      <button
        type={type ? type : "submit"}
        className="font-sans text-white bg-tertiary px-6 py-3 rounded-md hover:bg-primary"
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
