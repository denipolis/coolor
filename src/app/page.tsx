"use client";
import { useState } from "react";
import { RgbColorPicker } from "react-colorful";
import ColorInfo from "@/components/ColorInfo";
import RGBColor from "@/interfaces/RGBColor";
import { FaGithub, FaTelegramPlane, FaPizzaSlice } from "react-icons/fa";
import Link from "next/link";
import RGBColorInfo from "@/components/RGBColorInfo";
import CMYKColorInfo from "@/components/CMYKColorInfo";
import Divider from "@/components/Divider";

const RGBtoHEX = (color: RGBColor) => {
  const componentToHEX = (component: number) => {
    let value = component.toString(16);
    return value.length == 1 ? "0" + value : value;
  };

  return (
    componentToHEX(color.r) + componentToHEX(color.g) + componentToHEX(color.b)
  );
};

export default function Home() {
  const randomColors = [
    {
      r: 239,
      g: 239,
      b: 239,
    },
    {
      r: 125,
      g: 179,
      b: 189,
    },
    {
      r: 116,
      g: 76,
      b: 154,
    },
    {
      r: 169,
      g: 107,
      b: 140,
    },
    {
      r: 202,
      g: 179,
      b: 44,
    },
    {
      r: 33,
      g: 33,
      b: 33,
    },
    {
      r: 179,
      g: 179,
      b: 138,
    },
  ];

  const [color, setColor] = useState<RGBColor>(
    randomColors[(randomColors.length * Math.random()) | 0]
  );
  const [colorHEX, setColorHEX] = useState<string>("#" + RGBtoHEX(color));

  const onPickerChange = ({ r, g, b }: RGBColor) => {
    setColorHEX("#" + RGBtoHEX({ r: r, g: g, b: b }));
    setColor({ r, g, b });
  };

  const HEXtoRGB = (hex: string): RGBColor => {
    hex = hex.replace("#", "");

    if (hex.length < 6) {
      hex += "0";
    }

    const arrayBuffer = new ArrayBuffer(4);
    new DataView(arrayBuffer).setUint32(0, parseInt(hex, 16), false);
    const arrayOfBytes = new Uint8Array(arrayBuffer);

    return {
      r: arrayOfBytes[1],
      g: arrayOfBytes[2],
      b: arrayOfBytes[3],
    };
  };

  const colorToDEC = (color: RGBColor) => {
    const dec = parseInt(RGBtoHEX(color), 16);
    return Number.isNaN(dec) ? 0 : dec;
  };

  const DECToColor = (dec: number): RGBColor => {
    const r = Math.floor(dec / 65536);
    const g = Math.floor(dec / 256) % 256;
    const b = dec % 256;

    return {
      r: r,
      g: g,
      b: b,
    };
  };

  const getColorBrightness = (color: RGBColor) => {
    return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b;
  };

  const textColor =
    getColorBrightness(color) > 145 ? "text-neutral-800" : "text-neutral-200";

  return (
    <div
      className="flex justify-center items-center h-screen w-screen"
      style={{
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
      }}
    >
      <div className="h-full flex flex-col items-center justify-center gap-5">
        <div className="flex flex-row items-center justify-center gap-5">
          <RgbColorPicker
            color={color}
            onChange={onPickerChange}
            style={{
              width: "400px",
              height: "300px",
            }}
          />
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
              <ColorInfo
                textColor={textColor}
                title="HEX"
                value={colorHEX}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setColor(HEXtoRGB(event.target.value));
                  setColorHEX(
                    (event.target.value.includes("#") ? "" : "#") +
                      event.target.value
                  );
                }}
                maxLength={7}
              />
              <ColorInfo
                textColor={textColor}
                title="DEC"
                value={colorToDEC(color).toString() || "0"}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setColor(DECToColor(parseInt(event.target.value)));
                  setColorHEX(
                    (event.target.value.includes("#") ? "" : "#") +
                      event.target.value
                  );
                }}
                maxLength={8}
              />
            </div>
            <RGBColorInfo
              color={color}
              onChange={setColor}
              textColor={textColor}
            />
            <CMYKColorInfo color={color} textColor={textColor} />
          </div>
        </div>
        <Divider className="w-36" />
        <div className="flex flex-row w-full justify-center gap-3">
          <Link href={`https://github.com/denipolis`} target="_blank">
            <FaGithub className={`h-6 w-6 ${textColor}`} />
          </Link>
          <Link href={`https://t.me/denipolis`} target="_blank">
            <FaTelegramPlane className={`h-6 w-6 ${textColor}`} />
          </Link>
          <Link href={`http://localhost:3000/api/randomColor`} target="_blank">
            <FaPizzaSlice className={`h-6 w-6 ${textColor}`} />
          </Link>
        </div>
      </div>
    </div>
  );
}
