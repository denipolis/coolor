import { useColorScheme } from '@/hooks/useColorScheme'
import { cn } from '@/lib/utils'
import { type FC } from 'react'
import { TbBrandGithub, TbCode } from 'react-icons/tb'

const Footer: FC = () => {
  const { textColor } = useColorScheme()

  return (
    <div className='absolute bottom-8 flex flex-row justify-center gap-2'>
      <a href={`https://polishch.uk`} title="Developer's page" target='_blank'>
        <TbCode className={cn('h-6 w-6', textColor)} />
      </a>
      <a
        href={`https://github.com/denipolis/coolor`}
        title='Source code on GitHub'
        target='_blank'
      >
        <TbBrandGithub className={cn('h-6 w-6', textColor)} />
      </a>
    </div>
  )
}
export default Footer

