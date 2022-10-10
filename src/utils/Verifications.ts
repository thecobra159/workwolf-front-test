import * as yup from 'yup'
import { Messages } from './Constants'

export const nameRegex = /^[a-zA-Z/\s]+$/

export function isHTML(data: string): boolean {
  return /<\/?[a-z][\s\S]*>/i.test(data)
}

export const signUPSchema = yup.object().shape({
  firstName: yup.string().matches(nameRegex, Messages.wrongName).required(),
  lastName: yup.string().matches(nameRegex, Messages.wrongName).required(),
  email: yup.string().email(Messages.wrongEmail).required(),
})
