import { Input } from '@/components/Input/Input'
import { render } from '@testing-library/react'

describe('Testing Input component', () => {
  it('should be rendering correctly', () => {
    const { getByLabelText } = render(
      <Input label="testing-label" name="testing-name" id="testing-id" />,
    )

    expect(getByLabelText('testing-label')).toBeInTheDocument()
  })

  it('should be required', () => {
    const { getByLabelText } = render(
      <Input
        label="testing-label"
        name="testing-name"
        id="testing-id"
        required
      />,
    )

    expect(getByLabelText('testing-label')).toBeRequired()
  })
})
