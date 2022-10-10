import Button from '@/components/Button/Button'
import { ButtonType, Colors, FontWeight } from '@/src/utils/Enums'
import { render } from '@testing-library/react'

describe('Testing Input component', () => {
  it('should be rendering correctly', () => {
    const { getByText } = render(
      <Button
        backgroundColor={Colors.WorkwolfColor}
        borderColor={Colors.Transparent}
        textColor={Colors.White}
        type={ButtonType.Submit}
        fontWeight={FontWeight.Bold}
      >
        test button
      </Button>,
    )

    expect(getByText('test button')).toBeInTheDocument()
  })

  it('should be disabled', () => {
    const { getByText } = render(
      <Button
        backgroundColor={Colors.WorkwolfColor}
        borderColor={Colors.Transparent}
        textColor={Colors.White}
        type={ButtonType.Submit}
        fontWeight={FontWeight.Bold}
        disabled
      >
        test button
      </Button>,
    )

    expect(getByText('test button')).toBeDisabled()
  })
})
