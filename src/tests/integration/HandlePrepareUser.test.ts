import { handlePrepareUsers } from "../../controllers/UserController"
import { newUser } from '../UserFactory';

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc);

describe('Suite de testes para verificar o retorno do handlePrapreUser, deve estar legivel e pronto para uso em uma aplicação front', () => {
  test('passa o user com dominio de email diferente de @niuco.com.br, deve retornar o email escondido', () => {
    const user = newUser()
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.email).not.toBe(user.email)
  })
  test('passa o status como disabled deve retornar o is_active = false', () => {
    const user = newUser({ status: "disabled" })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.is_active).toBeFalsy()
  })
  test('passa o status como disabled e a role diferente de admin ou editor deve retornar o is_active = false e o is_a_payer = false', () => {
    const user = newUser({ status: "disabled", role: "system" })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.is_active).toBeFalsy()
    expect(preparedUser.is_a_payer).toBeFalsy()
  })
  test('passa o status como enabled e a role diferente de admin ou editor deve retornar o is_active = true e o is_a_payer = false', () => {
    const user = newUser({ status: "enabled", role: "viewer" })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.is_active).toBeTruthy()
    expect(preparedUser.is_a_payer).toBeFalsy()
  })
  test('passa o last_activity como unix deve retornar um iso 8601', () => {
    const user = newUser()
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.last_activity).toBe(dayjs(user.last_activity).utc(true).toISOString())
  })

  test('passa o user com dominio de email @niuco.com.br, deve retornar o email normal', () => {
    const user = newUser({ email: 'jose.silva.jr@niuco.com.br' })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.email).toBe(user.email)
  })
  test('passa o status como enabled deve retornar o is_active = true', () => {
    const user = newUser({ status: "enabled" })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.is_active).toBeTruthy()
  })
  test('passa o status como disabled e a role admin ou editor deve retornar o is_active = false e o is_a_payer = false', () => {
    const user = newUser({ status: "disabled", role: "admin" })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.is_active).toBeFalsy()
    expect(preparedUser.is_a_payer).toBeFalsy()
  })
  test('passa o status como enabled e a role admin ou editor deve retornar o is_active = true e o is_a_payer = true', () => {
    const user = newUser({ status: "enabled", role: "editor" })
    const preparedUser = handlePrepareUsers(user)

    expect(preparedUser.is_active).toBeTruthy()
    expect(preparedUser.is_a_payer).toBeTruthy()
  })
})