import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;

}

function Button({ children }: Props) {
  return (
    <button className="bg-orange-400 font-bold text-lg rounded-md h-10 w-36 text-black shadow-lg hover:shadow-yellow-300 flex items-center justify-center p-2">
      {children}
    </button>
  );
}

export default Button;
