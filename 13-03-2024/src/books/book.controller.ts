import { Request, Response } from 'express'
import { BookService } from './book.service'


class BookController {
    async create(req: Request, res: Response) {
        const book = await new BookService().create(req.body)
        return res.json(book)
    }

    async findById(req: Request, res: Response) {
        const book = await new BookService().findById(req.params.id)
        return res.json(book)
    }

    async deleteById(req: Request, res: Response) {
        const answer = await new BookService().deleteById(req.params.id)
        return res.json(answer)
    }

    async updateById(req: Request, res: Response){
        const answer = await new BookService().updateById(req.params.id, req.body)
        return res.json(answer)
    }
}

export default new BookController()