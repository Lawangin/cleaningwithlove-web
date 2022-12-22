import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  onClick?: (e: any) => void;
}

const Button = ({
  children,
  type,
  className,
  onClick,
}: IProps): JSX.Element => {
  return (
    <div className={className}>
      <button
        type={type ? type : "submit"}
        className="font-sans text-white bg-tertiary px-6 py-3 rounded-md hover:bg-primary"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};
export default Button;
