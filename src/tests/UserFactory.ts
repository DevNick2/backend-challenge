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
    name: manualData?.name || faker.person.fullName(),
    email: manualData?.email || faker.internet.email(),
    status: manualData?.status || 'disabled',
    role: manualData?.role || 'viewer',
    last_activity: dayjs().unix(),
  }
}