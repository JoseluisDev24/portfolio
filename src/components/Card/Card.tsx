import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  linkGithub?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link, linkGithub }) => {
  return (
    <div className="w-[100%] h-62 sm:w-4/12 bg-neutral-900 border border-b-4 border-slate-200 border-opacity-50 rounded-lg overflow-hidden flex flex-col">
      <img
        className="object-cover m-4 rounded-xl shadow-[0_0_3px_rgba(226,232,240,0.8)] transition-transform duration-300 ease-in-out hover:scale-125"
        src={image}
        alt={title}
      />
      <div className="px-4 ">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-stone-400 text-base">{description}</p>
      </div>
      <div className="px-4 py-4 h-16 text-sm flex justify-between gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-700 hover:bg-red-500 text-slate-200 font-bold py-2 px-4 w-32 rounded-lg flex items-center justify-center"
        >
          Ver Demo
        </a>
        <a href={linkGithub} target="_blank" rel="noopener noreferrer">
          <img
            className="w-8 hover:scale-110"
            src="../github-min.png"
            alt="logo github"
          />
        </a>
      </div>
    </div>
  );
};

export default Card;
