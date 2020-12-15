import Koa from 'koa';
import logger from './middleware/logger';

const app = new Koa();

app.use(logger);

app.listen(3000);
