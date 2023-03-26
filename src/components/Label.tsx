import React from 'react'
import { Inter } from "next/font/google";

const font = Inter({
    subsets: ["latin"],
});

interface ILabelProps {
    color?: string;
    text: string;
}

export function Label(props: ILabelProps){ 
    return (
        <p className={font.className + `font-normal text-md ${props.color || 'text-neutral-200'}`}>
            {props.text}
        </p>
    )
}
