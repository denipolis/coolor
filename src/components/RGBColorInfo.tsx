'use client';

import RGBColor from '@/interfaces/RGBColor';
import ColorInfo from './ColorInfo';
import React from 'react';

interface IRGBColorInfoProps {
  color: RGBColor;
  onChange: Function;
  textColor: string;
}

export default function RGBColorInfo(props: IRGBColorInfoProps) {
  return (
    <div className='flex flex-row gap-1 h-max w-24 rounded-md text-left'>
      <ColorInfo
        textColor={props.textColor}
        title='Red'
        value={props.color.r.toString()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange({
            r: parseInt(event.target.value),
            g: props.color.g,
            b: props.color.b,
          });
        }}
        maxLength={8}
      />
      <ColorInfo
        textColor={props.textColor}
        title='Blue'
        value={props.color.g.toString()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange({
            r: props.color.r,
            g: parseInt(event.target.value),
            b: props.color.b,
          });
        }}
        maxLength={8}
      />
      <ColorInfo
        textColor={props.textColor}
        title='Green'
        value={props.color.b.toString()}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
          props.onChange({
            r: props.color.r,
            g: props.color.g,
            b: parseInt(event.target.value),
          });
        }}
        maxLength={8}
      />
    </div>
  );
}
