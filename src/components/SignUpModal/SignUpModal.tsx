import {
  SignUpModalTitle,
  SignUpModalWrapper,
  SignUpModalLogo,
  SignUpModalDivider,
  SignUpModalFormInput,
  SignUpModalForm,
  SignUpModalFormError,
  SignUpModalDescription,
  SignUpModalFromTitle,
  SignUpModalAlreadyHaveAccount,
  SignInButtonWrapper,
} from '@/styles/components/SignUpModal/SignUpModal'
import { MockedData, UsefulLinks } from '@/utils/Constants'
import { isHTML, signUPSchema } from '@/src/utils/Verifications'
import { DragNDropFile } from '../DragNDropFile/DragNDropFile'
import Button from '@/components/Button/Button'
import { ButtonType, Colors, FontWeight } from '@/src/utils/Enums'
import { useEffect, useState } from 'react'

interface ISignUpModal {
  jobTitle?: string
  description?: string
}

export default function SignUpModal({
  jobTitle,
  description,
}: ISignUpModal): JSX.Element {
  const hasHTMLTag = isHTML(description)
  const [signUpForm, setSignUpForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
  })
  const [isFormValid, setIsFormValid] = useState(false)

  async function handleSubmit(): Promise<void> {
    // const isValid = await signUPSchema.isValid(signUpForm)
    // send data
  }

  useEffect(() => {
    signUPSchema.isValid(signUpForm).then(value => setIsFormValid(value))
  }, [signUpForm])

  return (
    <SignUpModalWrapper>
      <SignUpModalLogo alt="company logo" src={UsefulLinks.Logo} />
      <SignUpModalTitle>{jobTitle ?? MockedData.JobTitle}</SignUpModalTitle>

      <SignUpModalDivider />

      {hasHTMLTag && (
        <SignUpModalDescription
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {!hasHTMLTag && (
        <SignUpModalDescription>{description}</SignUpModalDescription>
      )}

      <SignUpModalForm>
        <SignUpModalFromTitle>
          Please fill out the following form to join the Pipeline
        </SignUpModalFromTitle>
        {!isFormValid &&
          signUpForm.firstName.length > 0 &&
          signUpForm.lastName.length > 0 &&
          signUpForm.email.length > 0 && (
            <SignUpModalFormError>Verify fields!</SignUpModalFormError>
          )}
        <SignUpModalFormInput
          label="First Name"
          name="firstName"
          id="firstName"
          type="text"
          onChange={({ target: { value } }) =>
            setSignUpForm({
              firstName: value,
              lastName: signUpForm.lastName,
              email: signUpForm.email,
            })
          }
          required
        />
        <SignUpModalFormInput
          label="Last Name"
          name="lastName"
          id="lastName"
          type="text"
          onChange={({ target: { value } }) =>
            setSignUpForm({
              firstName: signUpForm.firstName,
              lastName: value,
              email: signUpForm.email,
            })
          }
          required
        />
        <SignUpModalFormInput
          label="Email"
          name="email"
          id="email"
          type="email"
          onChange={({ target: { value } }) =>
            setSignUpForm({
              firstName: signUpForm.firstName,
              lastName: signUpForm.lastName,
              email: value,
            })
          }
          required
        />

        <DragNDropFile />

        <Button
          backgroundColor={Colors.WorkwolfColor}
          borderColor={Colors.Transparent}
          textColor={Colors.White}
          type={ButtonType.Submit}
          onClick={handleSubmit}
          onSubmit={handleSubmit}
          disabled={!isFormValid}
          fontWeight={FontWeight.Bold}
        >
          Submit
        </Button>
      </SignUpModalForm>

      <SignUpModalAlreadyHaveAccount>
        <SignUpModalDivider />
        <p>Already have an account?</p>
        <SignUpModalDivider />
      </SignUpModalAlreadyHaveAccount>

      <SignInButtonWrapper>
        <Button
          backgroundColor={Colors.Transparent}
          backgroundHoverColor={Colors.WorkwolfColor}
          borderColor={Colors.Black}
          textColor={Colors.Black}
          textHoverColor={Colors.White}
          type={ButtonType.Button}
          fontWeight={FontWeight.Regular}
        >
          Sign In
        </Button>
      </SignInButtonWrapper>
    </SignUpModalWrapper>
  )
}
