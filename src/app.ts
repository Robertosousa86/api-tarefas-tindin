import server from './server';

const PORT = 3000;

server.listen(PORT, () => {
  return console.info(`Server running at http://localhost:${PORT}`);
});
