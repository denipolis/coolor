import React from 'react'
import { Inter } from "next/font/google";

const font = Inter({
    subsets: ["latin"],
});

interface ITitleProps {
    color?: string;
    text: string;
}

export function Title(props: ITitleProps){ 
    return (
        <p className={font.className + `font-bold text-xl ${props.color || 'text-neutral-200'}`}>
            {props.text}
        </p>
    )
}
