import { format } from 'date-fns'
import { TableColumn } from '.'

const tableMock: TableColumn[] = [
  {
    'Criado em': [
      format(new Date(), 'dd/MM/yyyy HH:mm').toString(),
      format(new Date(), 'dd/MM/yyyy HH:mm').toString(),
      format(new Date(), 'dd/MM/yyyy HH:mm').toString(),
      format(new Date(), 'dd/MM/yyyy HH:mm').toString(),
      format(new Date(), 'dd/MM/yyyy HH:mm').toString()
    ]
  },
  {
    nome: [
      'Fulano Ciclano',
      'Fulano Ciclano',
      'Fulano Ciclano',
      'Fulano Ciclano',
      'Fulano Ciclano'
    ]
  },
  {
    perfil: [
      'Administrador',
      'Administrador',
      'Administrador',
      'Administrador',
      'Administrador'
    ]
  },
  {
    email: [
      'example@gmail.com',
      'example@gmail.com',
      'example@gmail.com',
      'example@gmail.com',
      'example@gmail.com'
    ]
  },
  {
    atividade: ['Ativo', 'Ativo', 'Ativo', 'Ativo', 'Ativo']
  }
]

export default tableMock
