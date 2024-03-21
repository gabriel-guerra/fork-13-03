import bookModel from './book.schema'

export class BookService {
    async create(book: any) {
        const createdBook = bookModel.create(book)
        return createdBook
    }

    async findById(id: any) {
        const findedBook = await bookModel.findById(id)
        return findedBook
    }

    async deleteById(id: any){
        return bookModel.deleteOne({_id: id});
    }

    async updateById(id: any, book: any){
        return bookModel.findByIdAndUpdate(id, book)
    }
}