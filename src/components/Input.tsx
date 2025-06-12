import { useColorScheme } from '@/hooks/useColorScheme'
import { cn } from '@/lib/utils'
import type { FC, InputHTMLAttributes } from 'react'

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
}

const Input: FC<IInputProps> = ({ title, className, ...props }) => {
  const { textColor } = useColorScheme()

  return (
    <div className={cn('flex flex-col w-20 sm:w-24', className)}>
      <span className={cn('font-bold', textColor)}>{title}</span>
      <input
        {...props}
        className={cn(
          'outline-none focus:ring-2 focus:px-1 rounded-xs bg-transparent',
          textColor
        )}
      />
    </div>
  )
}

export default Input
