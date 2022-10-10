import styled, { css } from 'styled-components'
import { media } from '@/styles/GlobalStyles'
import { Theme } from '@/styles/Theme'

export interface IInputProps {
  isFilled?: boolean
  isDisabled?: boolean
  isFocused?: boolean
}

export const inputContainerStyles = css<IInputProps>`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 25px 0 0;
  padding: 8px 0 0;
  width: 95%;
`

export const inputLabelStyles = css<IInputProps>`
  color: ${props =>
    props.isDisabled ? `${Theme.colors.LightGray}` : `${Theme.colors.Black}`};
  display: inline-block;
  font-size: ${Theme.sizes.sm};
  font-weight: ${Theme.weights.semibold};
  line-height: ${Theme.heights.tight};
  margin-bottom: 6px;
  text-align: left;
`
export const inputWrapperStyles = css<IInputProps>`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  width: 100%;

  input {
    background-color: ${Theme.colors.White};
    border: 1px solid ${Theme.colors.LightGray};
    border-radius: 8px;
    box-sizing: content-box;
    color: ${Theme.colors.Black};
    font-size: ${Theme.sizes['2xs']};
    font-weight: ${Theme.weights.regular};
    height: 22px;
    padding: 16px;
    width: 100%;

    &:focus {
      outline: none;
    }

    ${props =>
      props.isFocused &&
      css`
        border-color: ${Theme.colors.Gray};
        border-width: 2px;
        box-shadow: 0 0 0 1px ${Theme.colors.Gray} inset;
      `}
  }

  input:disabled {
    background-color: ${Theme.colors.LightGray};
  }

  ${media.mobile} {
    input {
      font-size: ${Theme.sizes.xs};
    }
  }
`

export const InputContainer = styled.div<IInputProps>`
  ${inputContainerStyles}
`

export const InputLabel = styled.label<IInputProps>`
  ${inputLabelStyles}
`
export const InputWrapper = styled.div<IInputProps>`
  ${inputWrapperStyles}
`
