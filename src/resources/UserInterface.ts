export interface UserInterface {
  name: string,
  email: string,
  status: 'enabled' | 'disabled',
  role: 'viewer' | 'system' | 'editor' | 'admin',
  last_activity: number,
}