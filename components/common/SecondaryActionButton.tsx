import React from "react";
import { ButtonProps } from "./MainActionButton";

export default function SecondaryActionButton({
  label,
  icon,
  handleClick,
  hidden,
  disabled = false,
}: ButtonProps): JSX.Element {
  return (
    <button
      className={`w-full px-2 py-2.5 rounded
                  bg-black border border-black text-[#F6AE3F] font-semibold text-base
                  transition-all ease-in-out duration-500
                  disabled:bg-customGray100 disabled:border-customGray100 disabled:text-[#F6AE3F] disabled:cursor-not-allowed
                  disabled:hover:border-customGray100 disabled:hover:bg-customGray100 disabled:hover:text-[#F6AE3F]
                  ${hidden ? "hidden" : ""}`}
      onClick={handleClick}
      disabled={disabled}
    >
      <span className="flex flex-wrap items-center justify-center gap-2">
        <span className="font-bold text-lg">{label}</span>
        {icon && <img src={icon} alt={label} className="w-5 h-5" />}
      </span>
    </button>
  );
}
