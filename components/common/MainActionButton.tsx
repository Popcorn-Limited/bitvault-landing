import React from "react";

export interface ButtonProps {
  label: string;
  icon?: string;
  handleClick?: (event: React.MouseEvent<HTMLElement>) => void;
  disabled?: boolean;
  hidden?: boolean;
  className?: string;
}

export default function MainActionButton({
  label,
  icon,
  handleClick,
  className,
  disabled = false,
  hidden = false,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`w-full px-2 py-2.5 rounded bg-primaryGold border border-primaryGold font-semibold text-base text-black
                  transition-all ease-in-out duration-500 hover:bg-secondaryGold hover:border-secondaryGold 
                  disabled:bg-customGray100 disabled:border-customGray100 disabled:text-white disabled:cursor-not-allowed 
                  disabled:hover:border-customGray100 disabled:hover:bg-customGray100 disabled:hover:text-white
                  ${hidden ? "hidden" : ""} ${className}`}
      onClick={handleClick}
      type="button"
      disabled={disabled}
    >
      <span className="flex flex-row items-center justify-center gap-2">
        <span className="font-bold text-xl">{label}</span>
        {icon && <img src={icon} alt={label} className="w-5 h-5" />}
      </span>
    </button>
  );
}
