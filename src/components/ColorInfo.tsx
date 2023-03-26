"use client";

import React, { ChangeEventHandler } from "react";
import { Inter } from "next/font/google";
import { Title } from "./Title";

const font = Inter({
  subsets: ["latin"],
});

interface IColorInfoProps {
  onChange?: ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
  readOnly?: boolean;
  textColor: string;
  title: string;
  value: string;
}

export default function ColorInfo(props: IColorInfoProps) {
  return (
    <div className="flex flex-col h-max w-24 rounded-md text-left">
      <Title text={props.title} color={props.textColor} />
      <input
        readOnly={props.readOnly}
        className={
          font.className +
          `focus:border-transparent outline-none focus:ring-2 focus:px-1 ring-neutral-200 font-normal rounded-md bg-transparent ${props.textColor}`
        }
        value={props.value}
        onChange={(e) => {
          const caretStart = e.target.selectionStart;
          const caretEnd = e.target.selectionEnd;

          props.onChange ? props.onChange(e) : "";

          e.target.setSelectionRange(caretStart, caretEnd);
        }}
        maxLength={props.maxLength}
      ></input>
    </div>
  );
}
