import { Colors, FontWeight } from '@/src/utils/Enums'
import { getColor, getFontWeight } from '@/src/utils/Functions'
import styled from 'styled-components'
import { Theme } from '../../Theme'

interface IButtonStyle {
  backgroundColor?: Colors
  backgroundHoverColor?: Colors
  borderColor?: Colors
  textColor?: Colors
  textHoverColor?: Colors
  disabled?: boolean
  fontWeight?: FontWeight
}

const getButtonBackgroundColor = ({
  disabled,
  backgroundColor,
}: IButtonStyle) => {
  if (disabled) {
    return Theme.colors.Gray
  }

  return getColor(backgroundColor || Colors.White)
}

const getButtonBackgroundHoverColor = ({
  disabled,
  backgroundColor,
  backgroundHoverColor,
}: IButtonStyle) => {
  if (disabled) {
    return Theme.colors.Gray
  }

  return getColor(backgroundHoverColor || backgroundColor)
}

const getButtonFontWeight = ({ fontWeight }: IButtonStyle) => {
  return getFontWeight(fontWeight)
}

export const ButtonWrapper = styled.button<IButtonStyle>`
  align-items: center;
  background-color: ${getButtonBackgroundColor};
  border-color: ${props => getColor(props.borderColor)};
  border-radius: 3px;
  border-style: solid;
  color: ${props => getColor(props.textColor || Colors.Black)};
  cursor: pointer;
  display: flex;
  font-size: ${Theme.sizes.md};
  font-weight: ${getButtonFontWeight};
  height: 65px;
  justify-content: center;
  transition: all 0.3s;
  width: 100%;

  :hover {
    box-shadow: 0 34px 30px -20px rgba(0, 0, 0, 0.1);
    opacity: 0.9;
    background-color: ${getButtonBackgroundHoverColor};
    border-color: ${getButtonBackgroundHoverColor};
    color: ${props => getColor(props.textHoverColor || props.textColor)};
  }

  :focus {
    outline: none;
  }
`
