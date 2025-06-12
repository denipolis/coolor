import { useColorScheme } from '@/hooks/useColorScheme'
import { type FC, type HTMLAttributes } from 'react'

const Logo: FC<HTMLAttributes<SVGElement>> = ({ ...props }) => {
  const { isBright, textColor } = useColorScheme()

  return (
    <svg
      width='319'
      height='512'
      viewBox='0 0 319 512'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clip-path='url(#clip0_7_77)'>
        <path
          d='M255.987 266C255.987 407.385 397.365 512 255.987 512C114.609 512 0 397.385 0 256C0 114.615 114.609 0 255.987 0C397.365 0 255.987 124.615 255.987 266Z'
          className={isBright ? 'fill-black' : 'fill-white'}
        />
      </g>
      <defs>
        <clipPath id='clip0_7_77'>
          <rect width='319' height='512' fill='white' className={textColor} />
        </clipPath>
      </defs>
    </svg>
  )
}
export default Logo

