import Koa, { Context } from 'koa';
import bodyParser from 'koa-bodyparser';
import KoaRouter from 'koa-router';
import Log from './utils/logger.js';
import { handleSuccess, handleError, HandleSuccess } from './utils/handle';
import logger from './middleware/logger.js';
import config from './project.config.js';
const { appName, port } = config;

const app = new Koa();

const router = new KoaRouter();

// @example: ctx.logger.info('hello')
app.context.logger = new Log();

// @example: ctx.handleSuccess({ list: [] })
app.context.handleSuccess = handleSuccess;

// @example: ctx.handleError(10001)
app.context.handleError = handleError;

app.use(bodyParser());

app.use(logger);

router.get('/hello', (ctx, next) => {
  // console.log(ctx.handleSuccess({}));
})

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(port, () => {
  console.log(`${appName} is running on localhost:${port}`)
});
