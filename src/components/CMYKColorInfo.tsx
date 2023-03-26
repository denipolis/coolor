"use client";

import CMYKColor from "@/interfaces/CMYKColor";
import RGBColor from "@/interfaces/RGBColor";
import ColorInfo from "./ColorInfo";
import React from "react";

interface ICMYKColorInfoProps {
  color: RGBColor;
  textColor: string;
}

const RGBtoCMYK = (color: RGBColor): CMYKColor => {
  const r = color.r / 255;
  const g = color.g / 255;
  const b = color.b / 255;

  const k = +(1 - Math.max(r, g, b)).toFixed(2);
  const c = +((1 - r - k) / (1 - k) || 0).toFixed(2);
  const m = +((1 - g - k) / (1 - k) || 0).toFixed(2);
  const y = +((1 - b - k) / (1 - k) || 0).toFixed(2);

  return {
    c: Number.isNaN(c) ? 0 : Math.abs(Math.floor(c * 100)),
    m: Number.isNaN(m) ? 0 : Math.abs(Math.floor(m * 100)),
    y: Number.isNaN(y) ? 0 : Math.abs(Math.floor(y * 100)),
    k: Number.isNaN(k) ? 0 : Math.abs(Math.floor(k * 100)),
  };
};

export default function CMYKColorInfo(props: ICMYKColorInfoProps) {
  return (
    <div className="flex flex-row h-max w-24 rounded-md text-left">
      <ColorInfo
        textColor={props.textColor}
        title="Cyan"
        value={RGBtoCMYK(props.color).c.toString()}
        maxLength={3}
        readOnly={true}
      />
      <ColorInfo
        textColor={props.textColor}
        title="Magenta"
        value={RGBtoCMYK(props.color).m.toString()}
        maxLength={3}
        readOnly={true}
      />
      <ColorInfo
        textColor={props.textColor}
        title="Yellow"
        value={RGBtoCMYK(props.color).y.toString()}
        maxLength={3}
        readOnly={true}
      />
      <ColorInfo
        textColor={props.textColor}
        title="Key"
        value={RGBtoCMYK(props.color).k.toString()}
        maxLength={3}
        readOnly={true}
      />
    </div>
  );
}
