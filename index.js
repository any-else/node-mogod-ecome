const app = require('./src/app');

//init server running
const PORTS = process.env.PORT || 4000;
const server = app.listen(PORTS, async () => {
  console.log(`Sever is running at http://localhost:${PORTS}`);
});

process.on('SIGINT', () => {
  server.close(() => console.log(`\n Exit Sever Express`));
});
