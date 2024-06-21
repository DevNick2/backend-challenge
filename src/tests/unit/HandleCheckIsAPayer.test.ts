describe('Validar se o método que valida se o usuario é um pagante esta ok', () => {
  // importar o método
  // importar o método para criar usuarios
  // cria um user e passa um user como argumento do método

  // cenário: status é disabled e a role é editor ou admin: is_a_payer = false
  // cenário: status é enabled e a role é editor ou admin: is_a_payer = true
  // cenário: status é enabled e a role é diferente de editor ou admin: is_a_payer = false
  // cenário: status é disabled e a role é diferente de editor ou admin: is_a_payer = false

  const userDisabledWithRoleEditorOrAdmin = {}
  expect(handleCheckAPayer(userDisabledWithRoleEditorOrAdmin)).toBe(false)

  const userEnabledWithRoleEditorOrAdmin = {}
  expect(handleCheckAPayer(userEnabledWithRoleEditorOrAdmin)).toBe(true)

  const userEnabledWithRoleDiferent = {}
  expect(handleCheckAPayer(userEnabledWithRoleDiferent)).toBe(false)

  const userDisabledWithRoleDiferent = {}
  expect(handleCheckAPayer(userDisabledWithRoleDiferent)).toBe(false)
})