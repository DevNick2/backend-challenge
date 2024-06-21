import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'

dayjs.extend(utc);

describe('Valida se a funcionalidade de conversão de data retorna no ISO 8601', () => {
  // importar a função
  // criar um user com um last_activity unix
  // cenario: a data unix deve retornar ISO 8601
  // importar o método para criar usuarios

  const user = {}
  expect(handleConvertUnixToIso(user.last_activity)).toBe(dayjs(user.last_activity).utc(true).toISOString())
})