export interface UserResource {
  id: string,
  name: string,
  email: string,
  role: 'viewer' | 'system' | 'editor' | 'admin',
  last_activity: string,
  is_active: boolean,
  is_a_payer: boolean
}