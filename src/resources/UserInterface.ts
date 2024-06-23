export interface UserInterface {
  id: string,
  name: string,
  email: string,
  status: 'enabled' | 'disabled',
  role: 'viewer' | 'system' | 'editor' | 'admin',
  last_activity: number,
}