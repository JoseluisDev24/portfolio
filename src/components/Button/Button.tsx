import React from "react";

interface Props {
  children: React.ReactNode;
}

function Button({ children }: Props) {
  return (
    <button className="bg-orange-400 font-bold text-lg rounded-lg h-10 w-36 text-black shadow-lg hover:shadow-yellow-300">
      {children}
    </button>
  );
}

export default Button;
