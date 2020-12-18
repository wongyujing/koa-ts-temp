# Koa App

## 日志打印

```javascript
// info logger
ctx.logger.info('request info');

// error logger
ctx.logger.error(10001, 'invalid params');
```

## mysql

## handle

```javascript
// handle success
ctx.handleSuccess({ data: [] });

// handle error
ctx.handleError();
```
