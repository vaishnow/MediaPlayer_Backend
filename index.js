//import json server library in index.js file
const jsonServer=require('json-server')

//create server using this json library
const mediaPlayerServer=jsonServer.create()

//create link to db.json
const router=jsonServer.router('db.json')

//middleware to convert js to json
const middleware=jsonServer.defaults() 

//connect
mediaPlayerServer.use(middleware)
mediaPlayerServer.use(router)

//setup port for server (Both react and json-server uses port 3000 by default)
const port=4000	|| process.env.PORT

//monitor port 4000
mediaPlayerServer.listen(port,()=>{
	console.log(`mediaPlayerServer is listening to ${port} and waiting for the request`);
}) 