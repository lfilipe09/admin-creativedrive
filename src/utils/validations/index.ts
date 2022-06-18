import Joi from 'joi'
import { UserValidation } from '../../types/userTypes'
import {
  cpf_schema,
  email_schema,
  name_schema,
  password_schema,
  surname_schema
} from './errors'

const fieldsValidations = {
  cpf: cpf_schema,
  email: email_schema,
  name: name_schema,
  password: password_schema,
  surname: surname_schema
}

export type FieldErrors = {
  [key: string]: string
}

function getUserErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export function UserValidate(values: UserValidation) {
  const { cpf, email, name, password, surname } = fieldsValidations
  const schema = Joi.object({ cpf, email, name, password, surname })

  return getUserErrors(schema.validate(values, { abortEarly: false }))
}

function getFieldErrors(
  objError: Joi.ValidationResult,
  field: keyof UserValidation
) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[field] = err.message
    })
  }

  return errors
}

export function FieldValidate(value: string, field: keyof UserValidation) {
  return getFieldErrors(
    fieldsValidations[field].validate(value, { abortEarly: false }),
    field
  )
}
