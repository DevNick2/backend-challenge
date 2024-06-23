import { handleStatus } from "../../controllers/UserController";
import { newUser } from "../UserFactory";

describe('Suite para validar a conversão dos status para is_active', () => {
  test('Validar se o status = disabled retorna is_active = false', () => {
    const userStatusDisabled = newUser({ status: 'disabled' })

    expect(handleStatus(userStatusDisabled.status)).toBeFalsy()
  })
  
  test('Validar se o status = enabled retorna is_active = true', () => {
    const userStatusDisabled = newUser({ status: 'enabled' })

    expect(handleStatus(userStatusDisabled.status)).toBeTruthy()
  })
})