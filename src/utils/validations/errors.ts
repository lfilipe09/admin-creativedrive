import Joi from 'joi'

// eslint-disable-next-line no-useless-escape
const CPFValidation = /^\d{3}\d{3}\d{3}\d{2}$/
/*
CPF validation
*/

const EmailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
/*
match: anystring@anystring.anystring
and prevent matching multiple @ signs:
*/

const PasswordValidation =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
/*
At least one upper case English letter, (?=.*?[A-Z])
At least one lower case English letter, (?=.*?[a-z])
At least one digit, (?=.*?[0-9])
At least one special character, (?=.*?[#?!@$%^&*-])
Minimum eight in length .{8,} (with the anchors)
*/

export const name_schema = Joi.string().min(3).required().messages({
  'string.empty': `O Nome não pode ser vazio`,
  'string.min': `O Nome precisa ter no mínimo 3 dígitos`,
  'any.required': `O campo Nome é obrigatório`
})

export const surname_schema = Joi.string().min(3).required().messages({
  'string.empty': `O Sobrenome não pode ser vazio`,
  'string.min': `O Sobrenome precisa ter no mínimo 3 dígitos`,
  'any.required': `O campo Sobrenome é obrigatório`
})

export const cpf_schema = Joi.string()
  .min(11)
  .required()
  .pattern(CPFValidation)
  .messages({
    'string.empty': `O CPF não pode ser vazio`,
    'string.min': `O CPF precisa ter no mínimo 11 dígitos`,
    'string.pattern.base': 'Esse não é um CPF válido',
    'any.required': `O campo CPF é obrigatório`
  })

export const email_schema = Joi.string()
  .min(5)
  .required()
  .pattern(EmailValidation)
  .messages({
    'string.empty': `O email não pode ser vazio`,
    'string.min': `O email precisa ter no mínimo 5 dígitos`,
    'string.pattern.base': 'Esse não é um email válido',
    'any.required': `O campo email é obrigatório`
  })

export const password_schema = Joi.string()
  .min(8)
  .required()
  .pattern(PasswordValidation)
  .messages({
    'string.empty': `A senha não pode ser vazia`,
    'string.min': `A senha precisa ter no mínimo 8 dígitos`,
    'string.pattern.base':
      'Essa não é uma senha válida. Precisa ter no mínimo: 8 dígitos, 1 maiúscula, 1 minúscula, 1 número, 1 caracter especial',
    'any.required': `O campo senha é obrigatório`
  })
