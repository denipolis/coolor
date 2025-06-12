import type { RGBColor } from '@/interfaces/colors.type'
import { type ChangeEvent, type FC } from 'react'
import Input from './Input'

interface IRGBInputProps {
  value: RGBColor
  onChange?: (color: RGBColor) => unknown
}

const RGBInput: FC<IRGBInputProps> = ({ value, onChange }) => {
  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: 'r' | 'g' | 'b'
  ) => {
    onChange?.({
      ...value,
      [key]: Math.min(Number(e.target.value), 0xff)
    })
  }

  return (
    <div className='flex flex-row gap-2 place-items-center'>
      <Input
        title='red'
        value={value.r}
        onChange={e => handleInputChange(e, 'r')}
      />
      <Input
        title='green'
        value={value.g}
        onChange={e => handleInputChange(e, 'g')}
      />
      <Input
        title='blue'
        value={value.b}
        onChange={e => handleInputChange(e, 'b')}
      />
    </div>
  )
}

export default RGBInput
