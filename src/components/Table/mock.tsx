import { User } from '@styled-icons/feather'
import { format } from 'date-fns'
import Image from 'next/image'
import { TableColumn } from '.'

export const tableMock: TableColumn[] = [
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
    foto: [
      <User size={'1rem'} key={''} />,
      <Image
        key={''}
        unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
        src="https://source.unsplash.com/user/willianjusten/200x200"
        width={20}
        height={20}
      />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />
    ]
  },
  {
    nome: [
      'Fulano Ciclano1',
      'Fulano Ciclano2',
      'Fulano Ciclano3',
      'Fulano Ciclano4',
      'Fulano Ciclano5'
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
      'example1@gmail.com',
      'example2@gmail.com',
      'example3@gmail.com',
      'example4@gmail.com',
      'example5@gmail.com'
    ]
  },
  {
    atividade: ['Ativo', 'Ativo', 'Ativo', 'Ativo', 'Ativo']
  }
]

export const tableMockReduced: TableColumn[] = [
  {
    foto: [
      <User size={'1rem'} key={''} />,
      <Image
        key={''}
        unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
        src="https://source.unsplash.com/user/willianjusten/200x200"
        width={20}
        height={20}
      />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />
    ]
  },
  {
    nome: [
      'Fulano Ciclano1',
      'Fulano Ciclano2',
      'Fulano Ciclano3',
      'Fulano Ciclano4',
      'Fulano Ciclano5'
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
    atividade: ['Ativo', 'Ativo', 'Ativo', 'Ativo', 'Ativo']
  }
]

export const tableMockAdmin: TableColumn[] = [
  {
    foto: [
      <User size={'1rem'} key={''} />,
      <Image
        key={''}
        unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
        src="https://source.unsplash.com/user/willianjusten/200x200"
        width={20}
        height={20}
      />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />
    ]
  },
  {
    nome: [
      'Fulano Ciclano1',
      'Fulano Ciclano2',
      'Fulano Ciclano3',
      'Fulano Ciclano4',
      'Fulano Ciclano5'
    ]
  },
  {
    atividade: ['Ativo', 'Ativo', 'Ativo', 'Ativo', 'Ativo']
  }
]

export const tableMockInactive: TableColumn[] = [
  {
    foto: [
      <User size={'1rem'} key={''} />,
      <Image
        key={''}
        unoptimized={process.env.ENVIRONMENT !== 'PRODUCTION'}
        src="https://source.unsplash.com/user/willianjusten/200x200"
        width={20}
        height={20}
      />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />,
      <User size={'1rem'} key={''} />
    ]
  },
  {
    nome: [
      'Fulano Ciclano1',
      'Fulano Ciclano2',
      'Fulano Ciclano3',
      'Fulano Ciclano4',
      'Fulano Ciclano5'
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
  }
]
