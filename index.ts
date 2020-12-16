import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from './middleware/logger.js';
import config from './project.config.js';
const { appName, port } = config;

const app = new Koa();

app.use(bodyParser());

app.use(logger);

app.listen(port, () => {
  console.log(`${appName} is running on localhost:${port}`)
});
