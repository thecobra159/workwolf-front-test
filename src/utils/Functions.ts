import { Theme } from '@/styles/Theme'
import { Colors, FontWeight } from './Enums'

export function getColor(color: Colors): string {
  switch (color) {
    case Colors.Black:
    default:
      return Theme.colors.Black
    case Colors.Blue:
      return Theme.colors.Blue
    case Colors.Gray:
      return Theme.colors.Gray
    case Colors.LightGray:
      return Theme.colors.LightGray
    case Colors.Red:
      return Theme.colors.Red
    case Colors.Transparent:
      return Theme.colors.Transparent
    case Colors.White:
      return Theme.colors.White
    case Colors.WorkwolfColor:
      return Theme.colors.WorkwolfColors
  }
}

export function getFontWeight(fontWeight: FontWeight): number {
  switch (fontWeight) {
    case FontWeight.Thin:
      return Theme.weights.thin
    case FontWeight.Light:
      return Theme.weights.light
    case FontWeight.Regular:
    default:
      return Theme.weights.regular
    case FontWeight.Semibold:
      return Theme.weights.semibold
    case FontWeight.Bold:
      return Theme.weights.bold
  }
}
