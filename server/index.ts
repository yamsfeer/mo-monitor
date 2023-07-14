import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './router.js'

const app = new Koa()
const routes = router.routes()
const port = 8888

app.use(bodyParser()) // 解析 post 请求传过来的数据，放到 ctx.request.body 中
app.use(routes)

app.listen(port)
console.log(`server is running on ${port}`)
