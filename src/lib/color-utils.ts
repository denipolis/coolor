import type { CMYKColor, RGBColor } from '@/interfaces/colors.type'

export const RGBtoCMYK = (color: RGBColor): CMYKColor => {
  const r = color.r / 255
  const g = color.g / 255
  const b = color.b / 255

  const k = +(1 - Math.max(r, g, b)).toFixed(2)
  const c = +((1 - r - k) / (1 - k) || 0).toFixed(2)
  const m = +((1 - g - k) / (1 - k) || 0).toFixed(2)
  const y = +((1 - b - k) / (1 - k) || 0).toFixed(2)

  return {
    c: Number.isFinite(c) ? Math.abs(Math.floor(c * 100)) : 0,
    m: Number.isFinite(m) ? Math.abs(Math.floor(m * 100)) : 0,
    y: Number.isFinite(y) ? Math.abs(Math.floor(y * 100)) : 0,
    k: Number.isFinite(k) ? Math.abs(Math.floor(k * 100)) : 0
  }
}

export const CMYKtoRGB = (color: CMYKColor): RGBColor => {
  const c = color.c / 100
  const m = color.m / 100
  const y = color.y / 100
  const k = color.k / 100

  const r = Math.round(255 * (1 - c) * (1 - k))
  const g = Math.round(255 * (1 - m) * (1 - k))
  const b = Math.round(255 * (1 - y) * (1 - k))

  return { r, g, b }
}

export const RGBtoHEX = (color: RGBColor) => {
  const componentToHEX = (component: number) => {
    const value = component.toString(16)

    return value.length === 1 ? '0' + value : value
  }

  return (
    componentToHEX(color.r || 0) +
    componentToHEX(color.g || 0) +
    componentToHEX(color.b || 0)
  )
}

export const HEXtoRGB = (hex: string): RGBColor => {
  hex = hex.replace('#', '')

  if (hex.length < 6) {
    hex += '0'
  }

  const arrayBuffer = new ArrayBuffer(4)
  new DataView(arrayBuffer).setUint32(0, parseInt(hex, 16), false)
  const arrayOfBytes = new Uint8Array(arrayBuffer)

  return {
    r: arrayOfBytes[1],
    g: arrayOfBytes[2],
    b: arrayOfBytes[3]
  }
}

export const RGBtoDEC = (color: RGBColor) => {
  const dec = parseInt(RGBtoHEX(color), 16)
  return Number.isNaN(dec) ? 0 : dec
}

export const DECtoRGB = (dec: number): RGBColor => {
  if (isNaN(dec)) return { r: 0, g: 0, b: 0 }

  const r = Math.floor(dec / 65536)
  const g = Math.floor(dec / 256) % 256
  const b = dec % 256

  return {
    r: r,
    g: g,
    b: b
  }
}

export const getColorBrightness = (color: RGBColor) => {
  return 0.2126 * color.r + 0.7152 * color.g + 0.0722 * color.b
}

