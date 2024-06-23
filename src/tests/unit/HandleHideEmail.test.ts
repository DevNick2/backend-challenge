import { handleHideEmail } from "../../controllers/UserController"
import { newUser } from "../UserFactory"

describe('wValidar se o método esconde caracteres do e-mail quando o dominio não é @niuco.com.br', () => {
  test('passa o email com @niuco.com.br e retorna o email normal', () => {
    const userWithNiucoDomain = newUser({ email: 'umemail@niuco.com.br' })

    expect(handleHideEmail(userWithNiucoDomain.email)).toBe(userWithNiucoDomain.email)
  })

  test('passa o email diferente de @niuco.com.br e retorna o email com caracteres escondidos', () => {
    const userWithOtherDomain = newUser()

    expect(handleHideEmail(userWithOtherDomain.email)).not.toBe(userWithOtherDomain.email)
  })
  
  test('passa um e-mail com caracteres especiais e dominio @niuco.com.br', () => {
    const userWithNiucoDomainWithSpecialCharacter = newUser({ email: 'jose.silva@niuco.com.br' })

    expect(handleHideEmail(userWithNiucoDomainWithSpecialCharacter.email)).toBe(userWithNiucoDomainWithSpecialCharacter.email)
  })

  test('passa um e-mail com caracteres especiais e dominio diferente de @niuco.com.br', () => {
    const userWithOtherDomainWithSpecialCharacter = newUser()

    expect(handleHideEmail(userWithOtherDomainWithSpecialCharacter.email)).not.toBe(userWithOtherDomainWithSpecialCharacter.email)
  })
})