import { ReactNode } from "react";

interface IProps {
  children?: ReactNode;
  color?: string;
  bkg?: string;
  styling?: string;
}
const ContainerWrapper = ({ color, children, bkg, styling = "" }: IProps) => {
  const styles = {
    backgroundColor: !color ? "#000" : color,
    backgroundImage: bkg ? `url(${bkg})` : "none",
  };
  // const bkgColor = !color ? 'bg-slate-400' : color
  // const bkgImg = bkg ? { backgroundImage: `url(${bkg})` } : {}
  return (
    <section style={styles} className={styling}>
      <div className="max-w-screen-xl mx-auto">{children}</div>
    </section>
  );
};

export default ContainerWrapper;
