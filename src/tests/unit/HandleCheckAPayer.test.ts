import { handleCheckAPayer } from '../../controllers/UserController';

import { newUser } from '../UserFactory';

describe('Validar se o método que valida se o usuario é um pagante esta ok', () => {
  test('Passa um usuario com status disabled e role = editor ou admin', () => {
    const userDisabledWithRoleEditor = newUser({ role: 'editor', status: 'disabled' })
    expect(handleCheckAPayer(userDisabledWithRoleEditor)).toBe(false)

    const userDisabledWithRoleAdmin = newUser({ role: 'admin', status: 'disabled' })
    expect(handleCheckAPayer(userDisabledWithRoleAdmin)).toBe(false)
  })

  test('Passa um user com status enabled e a role = editor ou admin', () => {
    const userEnabledWithRoleEditor = newUser({ role: 'editor', status: 'enabled' })
    expect(handleCheckAPayer(userEnabledWithRoleEditor)).toBe(true)

    const userEnabledWithRoleAdmin = newUser({ role: 'admin', status: 'enabled' })
    expect(handleCheckAPayer(userEnabledWithRoleAdmin)).toBe(true)
  })

  test('Passa o status enabled e a role != editor ou admin', () => {
    const userEnabledWithRoleDiferent = newUser({ role: 'viewer', status: 'enabled' })
    expect(handleCheckAPayer(userEnabledWithRoleDiferent)).toBe(false)
  })

  test('Passa o status disabled e a role != editor ou admin', () => {
    const userDisabledWithRoleDiferent = newUser({ role: 'system', status: 'disabled' })
    expect(handleCheckAPayer(userDisabledWithRoleDiferent)).toBe(false)
  })
})