import React from "react";

interface ButtonProps {
  title: string;
}

const Button = ({ title }: ButtonProps) => {
  return (
    <div className="bg-white font-medium text-red text-xs rounded-[10px] uppercase">
      {title}
    </div>
  );
};

export default Button;
