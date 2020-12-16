import { Next, Context } from 'koa'

/**
 * 日志打印
 * @param ctx
 * @param next
 * @specification
 */
export default async function logger(ctx: Context, next: Next) {
  const { url, method, body: requestBody } = ctx.request;
  try {
    await next();
  } catch (e) {

  }
  const { status, message, body: responseBody } = ctx.response;
  console.log(`[INFO] ${ new Date() } ${ status } ${ message } ${ method } ${ url } ${ JSON.stringify(requestBody) } ${JSON.stringify(responseBody)}`);
}
