import Router from 'koa-router'
import { Context } from 'koa'

const router = new Router()

router.post('/performance', async (ctx: Context) => {
  ctx.set('Access-Control-Allow-Origin', '*') // 跨域请求

  ctx.body = ctx.request.body
})

export default router
