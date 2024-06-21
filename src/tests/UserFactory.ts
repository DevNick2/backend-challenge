import { UserInterface } from "../resources/UserInterface";

import dayjs from "dayjs";

export function newUser (): UserInterface {
  return {
    name: 'Teste',
    email: 'Teste',
    status: 'disabled',
    role: 'viewer',
    last_activity: dayjs().unix(),
  }
}