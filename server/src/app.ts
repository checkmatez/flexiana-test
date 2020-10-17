import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import cors from '@koa/cors'
import { canRearrange } from './can-rearrange'

export const app = new Koa()

app.use(cors())
app.use(bodyParser())

app.use(async (ctx, next) => {
  try {
    return await next()
  } catch (error) {
    ctx.response.status = 400
    ctx.response.body = { message: `invalid request, reason: ${error.message}` }
  }
})

app.use(async (ctx, next) => {
  ctx.response.status = 200
  ctx.response.body = {
    result: canRearrange(ctx.request.body.a, ctx.request.body.b),
  }

  return await next()
})
