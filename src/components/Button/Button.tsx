import { ButtonWrapper } from '@/src/styles/components/Button/Button'
import { Colors, FontWeight } from '@/src/utils/Enums'

interface IButton {
  backgroundColor?: Colors
  backgroundHoverColor?: Colors
  textColor?: Colors
  textHoverColor?: Colors
  borderColor?: Colors
  children: React.ReactNode | React.ReactChild
  fontWeight?: FontWeight
}

type ButtonProps = JSX.IntrinsicElements['button'] & IButton

export default function Button({
  onClick,
  onSubmit,
  backgroundColor,
  backgroundHoverColor,
  borderColor,
  children,
  textColor,
  textHoverColor,
  disabled,
  type,
  fontWeight,
}: ButtonProps): JSX.Element {
  return (
    <ButtonWrapper
      onClick={onClick}
      onSubmit={onSubmit}
      backgroundColor={backgroundColor}
      backgroundHoverColor={backgroundHoverColor}
      borderColor={borderColor}
      textColor={textColor}
      textHoverColor={textHoverColor}
      disabled={disabled}
      type={type}
      fontWeight={fontWeight}
    >
      {children}
    </ButtonWrapper>
  )
}
