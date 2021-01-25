import { Context, Next } from 'koa';

interface Rule {
  [key: string]: {
    required?: boolean;
    type?: string;
  }
}

const requestVerify = (requestRule: Rule, ctx: Context): Promise<boolean | string> => {
  const requestKeys = Object.keys(requestRule);
  const { body } = ctx.request;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < requestKeys.length; i ++) {
      const key = requestKeys[i];
      const { required, type } = requestRule[key];
      if (required && !Object.prototype.hasOwnProperty.call(body, key)) {
        reject(`${key} is required, but not found`);
        break;
      }
      if (type && typeof body[key] !== type) {
        reject(`${key} is except to ${type}, but got ${typeof body[key]}`);
        break;
      }
    }
    resolve(true);
  })
}

export function defineRouter(rule: Rule, callback: (ctx: Context, next: Next) => void) {
  return async (ctx: Context, next: Next): Promise<void> => {
    try {
      await requestVerify(rule, ctx);
      await callback(ctx, next);
    } catch (e) {
      console.log(e)
      ctx.body = {
        data: null,
        code: 20003,
        message: e,
      }
    }
  }
}
