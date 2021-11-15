import cors from 'cors';
import express from 'express';
import * as user from './controllers/users';

const server = express();

server.use(express.json());
server.use(cors());

server.get('/', (request, response) => {
  return response.send('Hello!');
});

server.post('/users', user.create);
server.get('/users', user.list);

export default server;
