import { useEffect, useState, type CSSProperties } from 'react'
import { RgbColorPicker } from 'react-colorful'
import CMYKInput from './components/CMYKInput'
import RGBInput from './components/RGBInput'
import {
  CMYKtoRGB,
  DECtoRGB,
  getColorBrightness,
  HEXtoRGB,
  RGBtoCMYK,
  RGBtoDEC,
  RGBtoHEX
} from './lib/color-utils'
import type { RGBColor } from './interfaces/colors.type'
import Input from './components/Input'
import ColorSchemeContext from './contexts/ColorSchemeContext'
import CopyButton from './components/CopyButton'
import Logo from './components/Logo'
import Footer from './components/Footer'
import H1 from './components/H1'

const App = () => {
  const [color, setColor] = useState<RGBColor>({
    r: 246,
    g: 246,
    b: 246
  })

  const [hexColor, setHexColor] = useState<string>('#' + RGBtoHEX(color))

  useEffect(() => {
    setHexColor(`#${RGBtoHEX(color)}`)
  }, [color])

  return (
    <ColorSchemeContext
      value={{
        textColor:
          getColorBrightness(color) > 145
            ? 'text-neutral-800'
            : 'text-neutral-200',
        fillColor:
          getColorBrightness(color) > 145
            ? 'fill-neutral-800'
            : 'fill-neutral-200',
        isBright: getColorBrightness(color) > 145
      }}
    >
      <div
        className='bg-gradient-to-br flex flex-col justify-center place-items-center h-screen w-screen overflow-hidden gap-4
        from-[rgb(calc(var(--color-r)+3),calc(var(--color-g)+7),calc(var(--color-b)+13))]
        via-[rgb(var(--color-r),var(--color-g),var(--color-b))]
        to-[rgb(calc(var(--color-r)+7),calc(var(--color-g)+7),calc(var(--color-b)+7))]'
        style={
          {
            '--color-r': color.r,
            '--color-g': color.g,
            '--color-b': color.b
          } as CSSProperties
        }
      >
        <div className='flex flex-col place-items-center gap-8 w-max'>
          <div className='flex flex-row place-items-center gap-1'>
            <Logo className='w-8 h-8' />
            <H1>coolor</H1>
          </div>
          <RgbColorPicker
            color={color}
            className='!w-full !h-64'
            onChange={setColor}
          />
          <div className='flex flex-col gap-2'>
            <div className='flex place-items-center justify-between'>
              <Input
                title='hexadecimal'
                value={hexColor}
                onChange={e => setHexColor(e.target.value)}
                onBlur={e => setColor(HEXtoRGB(e.target.value))}
                maxLength={7}
              />
              <CopyButton value={hexColor} />
            </div>
            <div className='flex place-items-center justify-between'>
              <Input
                title='decimal'
                value={RGBtoDEC(color)}
                onChange={e =>
                  setColor(DECtoRGB(Math.min(Number(e.target.value), 0xffffff)))
                }
              />
              <CopyButton value={String(RGBtoDEC(color))} />
            </div>
            <div className='flex place-items-center justify-between'>
              <RGBInput value={color} onChange={setColor} />
              <CopyButton value={`rgb(${color.r}, ${color.g}, ${color.b})`} />
            </div>
            <div className='flex place-items-center justify-between'>
              <CMYKInput
                value={color}
                onChange={color => setColor(CMYKtoRGB(color))}
              />
              <CopyButton
                value={`cmyk(${RGBtoCMYK(color).c}, ${RGBtoCMYK(color).m}, ${
                  RGBtoCMYK(color).y
                }, ${RGBtoCMYK(color).k})`}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ColorSchemeContext>
  )
}

export default App

