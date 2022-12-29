const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const cors = require('cors');
// Set default middlewares (logger, static, cors and no-cache)
server.use(cors());
server.use(router);

server.listen(3004, () => {
  console.log('JSON Server is running');
});
