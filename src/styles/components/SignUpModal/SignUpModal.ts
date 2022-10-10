import styled from 'styled-components'
import { Image } from '@/components/Image/Image'
import { Input } from '@/components/Input/Input'
import { Theme } from '@/styles/Theme'
import { media } from '../../GlobalStyles'

export const SignUpModalWrapper = styled.div`
  align-items: center;
  background-color: ${Theme.colors.White};
  border-radius: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  min-height: 90%;
  padding: 35px 125px;
  width: 45%;

  ${media.notebook} {
    padding: 35px 95px;
  }

  ${media.tablet} {
    width: 80%;
  }

  ${media.smallTablet} {
    padding: 35px 25px;
    width: 95%;
  }
`

export const SignUpModalLogo = styled(Image)`
  width: 52px;
`

export const SignUpModalTitle = styled.h2`
  margin: 24px 0;
`
export const SignUpModalDivider = styled.div`
  border: 1px solid ${Theme.colors.Gray};
  border-radius: 5px;
  width: 100%;
`

export const SignUpModalDescription = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 24px;
  width: 100%;

  ul {
    margin-top: 25px;
  }
`

export const SignUpModalForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  width: 100%;

  button {
    margin-top: 15px;
    width: 95%;
  }
`

export const SignUpModalFromTitle = styled.h3`
  font-size: ${Theme.sizes.sm};
  font-weight: ${Theme.weights.semibold};
  max-width: 100%;

  ${media.smallDesktop} {
    text-align: center;
  }
`

export const SignUpModalFormInput = styled(Input)``

export const SignUpModalFormError = styled.div`
  color: ${Theme.colors.Red};
  font-size: ${Theme.sizes.sm};
  margin: 16px 0;
`

export const SignUpModalAlreadyHaveAccount = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 55px 0;
  width: 100%;

  p {
    box-sizing: border-box;
    display: flex;
    font-size: ${Theme.sizes.md};
    font-weight: ${Theme.weights.regular};
    justify-content: center;
    min-width: 55%;
    padding: 15px;
    text-align: center;
  }
`

export const SignInButtonWrapper = styled.div`
  align-self: center;
  width: 45%;
`
