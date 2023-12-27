// import json-server
const jsonserver = require('json-server')
// create a server application using jsonserver
const restServer = jsonserver.create()
// setup path for db.json
const router = jsonserver.router()

// return a middleware used in json server
const middleware = jsonserver.defaults()

// setup port
const port = 3001
// use in server
restServer.use(middleware)
restServer.use(router)

// to run a port
restServer.listen(port,()=>{
    console.log("rest server listening on port" +port);
})