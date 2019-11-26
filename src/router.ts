import { Router } from 'https://deno.land/x/oak/mod.ts'
import { BookController } from './app/controller/book.ts'

const router = new Router()
router.get('/', context => {
  context.response.body = 'Hello world!'
})
const book = new BookController()
router.get('/books', book.index)
// router.post('/boooks', book.create)
router.get('/books/:id', book.show)

export default router