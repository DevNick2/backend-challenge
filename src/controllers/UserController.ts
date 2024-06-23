/* 
  Aqui podemos implementar uma controller mais definida usando
  Conceitos do MVC, aqui podemos implementar um CRUD e usar
  Os services para chamar as funções necessárias para cada etapa
*/
import { UserInterface } from "../resources/UserInterface"
import { UserResource } from "../resources/UserResource"

import Logger from '../winston'

import { FastifyRequest, FastifyReply } from 'fastify'
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc);

// XXX TODO :: esta função pode ser reaproveitada, podemos usar em um service
export function handleCheckAPayer (user: UserInterface): boolean {
  if (user.status === 'enabled') {
    if (['editor', 'admin'].includes(user.role)) {
      return true
    }

    return false
  }

  return false
}

// XXX TODO :: esta função pode ser reaproveitada, podemos usar em um service
export function handleConvertUnixToIso (unix: number): string {
  return dayjs(unix).utc(true).toISOString()
}
// XXX TODO :: esta função pode ser reaproveitada, podemos usar em um service
export function handleHideEmail (email: string): string {
  if (email.indexOf('niuco.com.br') === -1) {
    const atPosition = email.indexOf('@')
    const startEmail = email.slice(0, atPosition)

    email = [
      startEmail.slice(0, 2),
      startEmail.slice(2, startEmail.length-1).replaceAll(/\w/g, '*'),
      startEmail.slice(startEmail.length-1, startEmail.length),
      email.slice(atPosition, email.length)
    ].toString().replaceAll(',', '')
  }

  return email
}
// XXX TODO :: esta função pode ser reaproveitada, podemos usar em um service
export function handleStatus (status: string): boolean {
  return status === 'enabled' || false
}
// XXX TODO :: esta função pode ser reaproveitada, podemos usar em um service
export function handlePrepareUsers (user: UserInterface): UserResource {
  return {
    id: user.id,
    name: user.name,
    role: user.role,
    is_active: handleStatus(user.status),
    is_a_payer: handleCheckAPayer(user),
    email: handleHideEmail(user.email),
    last_activity: handleConvertUnixToIso(user.last_activity)
  }
}

export async function handler (req: FastifyRequest, res: FastifyReply) {
  try {
    const result = await fetch(process.env.API_URL)
    const users: object[] = []
  
    await result.json()
      // XXX FIXME :: Verificar por que não esta inferindo a interface correta
      .then((resolve: any) => {
        resolve.map((user: UserInterface) => users.push(handlePrepareUsers(user)))
      })
  
    return res
      .code(200)
      .header('Content-Type', 'application/json; charset=utf-8')
      .send(users)
  } catch (err) {
    Logger.error(err)
  }
}