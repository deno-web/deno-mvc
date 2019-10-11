import { Router } from '../vendor/oak/mod.ts'
import { BookController } from './app/controller/book.ts'

const router = new Router()
router.get('/', context => {
  context.response.body = 'Hello world!'
})
router.get('/books', new BookController().index)
router.get('/books/:id', new BookController().show)

export default router