import { useState, useRef, ChangeEvent } from 'react'
import {
  InputContainer,
  InputLabel,
  InputWrapper,
} from '@/src/styles/components/Input/Input'

interface IProps {
  name: string
  isDisabled?: boolean
  label: string
}

type InputProps = JSX.IntrinsicElements['input'] & IProps

export function Input({
  name,
  isDisabled,
  label,
  onBlur,
  onChange,
  ...rest
}: InputProps): JSX.Element {
  const inputRef = useRef<HTMLInputElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [isFilled, setIsFilled] = useState(false)

  const handleBlur = event => {
    event.persist()
    if (onBlur) onBlur(event)
    setIsFocused(false)
    setIsFilled(!!inputRef.current?.value)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <InputContainer>
      {label && (
        <InputLabel
          htmlFor={name}
          isFilled={isFilled}
          isFocused={isFocused}
          isDisabled={isDisabled}
        >
          {label}
        </InputLabel>
      )}
      <InputWrapper isFocused={!!isFocused}>
        <input
          name={name}
          autoComplete="nope"
          onBlur={handleBlur}
          ref={inputRef}
          onChange={handleChange}
          {...rest}
        />
      </InputWrapper>
    </InputContainer>
  )
}
