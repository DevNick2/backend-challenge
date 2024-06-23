import { handleConvertUnixToIso } from '../../controllers/UserController';
import { UserInterface } from '../../resources/UserInterface';

import { newUser } from '../UserFactory';

import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc);

describe('Valida se a funcionalidade de conversão de data retorna no ISO 8601', () => {
  let user: UserInterface

  beforeEach(() => user = newUser())

  test('A data em unix deve retornar um ISO 8601 com o UTC correto', () => {
    expect(handleConvertUnixToIso(user.last_activity)).toBe(dayjs(user.last_activity).utc(true).toISOString())
  })
})