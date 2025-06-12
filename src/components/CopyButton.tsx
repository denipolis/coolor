import { useColorScheme } from '@/hooks/useColorScheme'
import { cn } from '@/lib/utils'
import { type FC } from 'react'
import { TbClipboard } from 'react-icons/tb'
import { toast } from 'sonner'

interface ICopyButtonProps {
  value: string
}

const CopyButton: FC<ICopyButtonProps> = ({ value }) => {
  const { textColor } = useColorScheme()

  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(value)
        toast.success(`copied to clipboard: ${value}`)
      }}
      title={`Copy ${value} to clipboard`}
      className={cn(
        'flex justify-center place-items-center size-6 cursor-pointer',
        textColor
      )}
    >
      <TbClipboard className='size-full shrink-0' />
    </button>
  )
}
export default CopyButton

