import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link }) => {
  return (
    <div className="w-4/5 h-62 sm:w-4/12 border rounded overflow-hidden">
      <img className="object-cover p-6 " src={image} alt={title} />
      <div className="px-6 py-2">
        <h2 className="font-bold text-xl mb-2">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 h-16 text-sm flex justify-between gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 rounded-lg flex justify-center"
        >
          Ver
        </a>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 w-32 rounded-lg flex justify-center "
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Card;
