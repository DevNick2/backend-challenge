import { handleHideEmail } from "../../controllers/UserController"
import { newUser } from "../UserFactory"

describe('Validar se o método esconde caracteres do e-mail quando o dominio não é @niuco.com.br', () => {
  // Importar o método de criar usuarios
  // Importar o método de esconder os emails
  // Cenário: passa o email com @niuco.com.br e retorna o email normal
  // Cenário: passa o email diferente de @niuco.com.br e retorna o email com caracteres escondidos

  const userWithNiucoDomain = newUser()
  expect(handleHideEmail(userWithNiucoDomain.email)).toBe(userWithNiucoDomain.email)
  
  const userWithOtherDomain = newUser()
  expect(handleHideEmail(userWithOtherDomain.email)).not.toBe(userWithOtherDomain.email)
})