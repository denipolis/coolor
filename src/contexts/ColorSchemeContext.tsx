import { createContext } from 'react'

interface IColorScheme {
  textColor: string
  fillColor: string
  isBright: boolean
}

const ColorSchemeContext = createContext<IColorScheme>({
  textColor: 'text-neutral-200',
  fillColor: 'fill-neutral-200',
  isBright: false
})

export default ColorSchemeContext

