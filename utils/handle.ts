import { Context } from 'koa';
import code, { CodeType } from '../config/code.js';

/**
 * handle response
 */

export type HandleSuccess = <T>(this: Context, data?: T) => void

export function handleSuccess<T>(this: Context, data?: T) {
  this.body = {
    code: 0,
    data: data || {},
    message: 'success',
  }
}

export type HandleError = <T, U extends keyof CodeType>(
  this: Context,
  codeNumber: U,
  message?: string,
) => void;

export function handleError<T, U extends keyof CodeType>(
  this: Context,
  codeNumber: U,
  message?: string,
) {
  this.body = {
    code: 0,
    data: {},
    message: message || code[codeNumber],
  }
}
