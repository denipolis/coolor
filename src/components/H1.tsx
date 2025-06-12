import { useColorScheme } from '@/hooks/useColorScheme'
import { cn } from '@/lib/utils'
import { type FC, type HTMLAttributes } from 'react'

const H1: FC<HTMLAttributes<HTMLHeadingElement>> = ({
  children,
  className,
  ...props
}) => {
  const { textColor } = useColorScheme()

  return (
    <h1 className={cn('text-xl font-bold', textColor, className)} {...props}>
      {children}
    </h1>
  )
}
export default H1

