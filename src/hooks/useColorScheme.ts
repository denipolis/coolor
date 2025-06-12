import ColorSchemeContext from '@/contexts/ColorSchemeContext'
import { useContext } from 'react'

export const useColorScheme = () => useContext(ColorSchemeContext)
