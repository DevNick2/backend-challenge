/* 
  XXX TODO :: Este teste não esta funcionando
  pois por algum motivo quando uso o fastify.inject
  não consegue executar o fetch, provavelmente por se tratar de uma request
  para outra API aberta, talvez se mudar para o modo manual do json-server
  funcione
*/
// import { build } from "../../app"

// const server = build()

// describe('Testando a rota e o retorno do json', () => {
//   beforeAll(async () => {  
//     try {
//       await server.listen({ port: process.env.PORT })
//     } catch (e) {
//       console.log(e)
//     }
//   })

//   test('Testando a rota e o retorno do json', async () => {
//     const response = await server.inject().get('/users')
//     res.send(response.json())

//     const response = await fetch('http://localhost:4000/users')

//     const users = await response.json()
  
//     expect(response.status).toBe(200)

//     console.log(users)

//     server.close()
//   })
// })