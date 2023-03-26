'use client';

import React from 'react';

interface IDividerProps {
  className: string;
}

export default function Divider(props: IDividerProps) {
  return <div className={`h-[0.5px] bg-neutral-400 ${props.className}`} />;
}
