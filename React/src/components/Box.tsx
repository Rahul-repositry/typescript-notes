import { ReactNode, useContext } from "react";
import { ThemeContext } from "../App";

type Props = {
  heading?: string;
  children: ReactNode;
  func: (a: string) => void;
};

const Box = ({ heading = "hell", func, children }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme);
  func("Box");
  return (
    <>
      <h1>{heading}</h1>
      <div>{children}</div>
      <button onClick={toggleTheme}>Change theme</button>
    </>
  );
};

export default Box;
