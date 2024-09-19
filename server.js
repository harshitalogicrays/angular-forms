import jsonServer from 'json-server'
import cors from 'cors'
const server = jsonServer.create()
const router = jsonServer.router('data.json')
const middlewares = jsonServer.defaults()

const options = {
    origin:"http://localhost:4200",
    methods:'GET,POST,PUT,DELETE,PATCH',
    allowHeaders:['content-type','custom-header','Authorization']
}

server.use(cors(options))
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})