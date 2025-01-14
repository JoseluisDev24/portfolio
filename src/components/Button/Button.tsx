import React from "react";

interface Props {
  children: React.ReactNode;
  link?: string;
  download?: string;
  className?: string;
}
const Button = ({ children, link, download, className }: Props) => {
  return (
    <a href={link} download={download} className={className} target="_blank">
      <button>{children}</button>
    </a>
  );
};

export default Button;
