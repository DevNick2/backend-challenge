export interface UserInterface {
  name: string,
  email: string,
  status: string,
  role: 'viewer' | 'system' | 'editor' | 'admin',
  last_activity: number,
}