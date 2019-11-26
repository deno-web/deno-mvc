import { BookService } from '../service/book.ts'
export class BookController {
  book: BookService
  constructor () {
    this.book = new BookService()
  }
  async index(ctx) {
    ctx.response.body = await this.book.index()
  }
  async show(ctx) {
    const params = ctx.params
    ctx.response.body = await this.book.show(params)
  }
}