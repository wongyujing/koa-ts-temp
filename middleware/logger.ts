import { Next, Context } from 'koa'

export default async function logger(ctx: Context, next: Next) {
  const { url, method } = ctx.request;
  console.log(`${ Date.now() } - ${ url } - ${ method }`)
  await next();
}
