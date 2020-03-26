import Koa from 'koa';
import koaBody from 'koa-body';
import koaCors from '@koa/cors';
import dotenv from 'dotenv';
import router from 'api/router';
import logger from 'middleware/logger';
import locale from 'middleware/locale';
import jwt from 'middleware/jwt';

dotenv.config();

const app = new Koa();

app.use(logger());
app.use(koaCors());
app.use(locale);
app.use(jwt);
app.use(koaBody());
app.use(router.routes());

export default app;
