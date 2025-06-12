import {
  useContext,
  type ChangeEventHandler,
  type FC,
  type InputHTMLAttributes
} from 'react'

import ColorSchemeContext from '@/contexts/ColorSchemeContext'
import { cn } from '@/lib/utils'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange?: ChangeEventHandler<HTMLInputElement>
  title: string
}

const Input: FC<IInputProps> = ({ title, className, ...props }) => {
  const colorScheme = useContext(ColorSchemeContext)

  return (
    <div className={cn('flex flex-col w-20 sm:w-24', className)}>
      <span className={cn('font-bold', colorScheme.textColor)}>
        {title}
      </span>
      <input
        {...props}
        className={cn(
          'outline-none focus:ring-2 focus:px-1 rounded-xs bg-transparent',
          colorScheme.textColor
        )}
      />
    </div>
  )
}

export default Input

