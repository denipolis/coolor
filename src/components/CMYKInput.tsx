import type { CMYKColor, RGBColor } from '@/interfaces/colors.type'
import Input from './Input'
import { RGBtoCMYK } from '@/lib/color-utils'
import { useMemo, type ChangeEvent, type FC } from 'react'

interface ICMYKInputProps {
  value: RGBColor
  onChange?: (color: CMYKColor) => unknown
}

const CMYKInput: FC<ICMYKInputProps> = ({ value, onChange }) => {
  const color = useMemo(() => RGBtoCMYK(value), [value])

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: 'c' | 'm' | 'y' | 'k'
  ) => {
    onChange?.({
      ...color,
      [key]: Math.min(Number(e.target.value), 100)
    })
  }

  return (
    <div className='flex flex-row gap-2'>
      <Input
        title='cyan'
        value={color.c}
        onChange={e => handleInputChange(e, 'c')}
        maxLength={3}
      />
      <Input
        title='magenta'
        value={color.m}
        onChange={e => handleInputChange(e, 'm')}
        maxLength={3}
      />
      <Input
        title='yellow'
        value={color.y}
        onChange={e => handleInputChange(e, 'y')}
        maxLength={3}
      />
      <Input
        title='key'
        value={color.k}
        onChange={e => handleInputChange(e, 'k')}
        maxLength={3}
      />
    </div>
  )
}

export default CMYKInput

