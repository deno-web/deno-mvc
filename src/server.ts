import { Application, Context } from '../vendor/oak/mod.ts'
import router from './router.ts'

interface InitService {
  initMiddle(): void
  start(port: number): Promise<void>
}

export class Server implements InitService {
  private app = new Application()

  public initMiddle(): void {
    this.app.use(async (ctx: Context, next) => {
      await next()
      const rt = ctx.response.headers.get('X-Response-Time')
      console.log(`${ctx.request.method} ${ctx.request.url} - ${rt}`)
    })

    this.app.use(async (ctx: Context, next) => {
      const start = Date.now()
      await next()
      const ms = Date.now() - start
      ctx.response.headers.set('X-Response-Time', `${ms}ms`)
    })

    this.app.use(router.routes())
    this.app.use(router.allowedMethods())
  }

  public async start(port: number): Promise<void> {
    console.log('Server ready at http://127.0.0.1:8000')
    await this.app.listen(`127.0.0.1:${port}`)
  }
}
