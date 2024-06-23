import { UserInterface } from "../resources/UserInterface";

import { faker } from '@faker-js/faker'

import dayjs from "dayjs";

interface UserTest {
  name?: string,
  email?: string,
  status?: 'enabled' | 'disabled',
  role?: 'viewer' | 'admin' | 'system' | 'editor'
}

export function newUser (manualData?: UserTest): UserInterface {
  return {
    id: faker.string.uuid(),
    name: manualData?.name || faker.person.fullName(),
    email: manualData?.email || faker.internet.email(),
    status: manualData?.status || 'enabled',
    role: manualData?.role || 'viewer',
    last_activity: dayjs().unix(),
  }
}