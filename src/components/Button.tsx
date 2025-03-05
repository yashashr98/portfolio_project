import { FC } from 'react';

interface ButtonProps {
  text: string;
}

const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <button className="block w-full bg-gray-200 text-black py-2 px-4 rounded-md shadow-md hover:bg-gray-300 transition">
      {text}
    </button>
  );
};

export default Button;