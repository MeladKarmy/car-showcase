"use client";
import React from "react";
import { CustomBtnProps } from "@/types";
import Image from "next/image";

export default function CustomBtn({
  title,
  handleClick,
  btnType,
  containerStyles,
  textStyles,
  isDisabled,
  rightIcon,
}: CustomBtnProps) {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            src={rightIcon}
            alt="arrow_left"
            fill
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
}
