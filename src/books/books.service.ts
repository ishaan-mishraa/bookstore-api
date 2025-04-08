import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';
import { Book } from './entities/book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const book = this.bookRepository.create(createBookDto);
    const saved = await this.bookRepository.save(book);
    return { message: 'Book created successfully', data: saved };
  }

  async findAll(query?: any) {
    const {
      page = 1,
      limit = 10,
      search,
      category,
      sort = 'publishedDate', 
      order = 'DESC',         
    } = query;
  
    const skip = (page - 1) * limit;
    const where: any = {};
  
    if (search) {
      where.title = Like(`%${search}%`);
    }
  
    if (category) {
      where.category = category;
    }
  
    const validSortFields = ['publishedDate', 'price', 'rating'];
    const sortField = validSortFields.includes(sort) ? sort : 'publishedDate';
    const sortOrder = order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
  
    const [data, total] = await this.bookRepository.findAndCount({
      where,
      take: Number(limit),
      skip: Number(skip),
      order: { [sortField]: sortOrder },
    });
  
    return {
      message: 'List of books',
      data,
      total,
      page: Number(page),
      limit: Number(limit),
    };
  }
  

  async findOne(id: string) {
    const book = await this.bookRepository.findOneBy({ id });
    return { message: `Book with id ${id}`, data: book };
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    await this.bookRepository.update(id, updateBookDto);
    const updated = await this.bookRepository.findOneBy({ id });
    return { message: `Book with id ${id} updated`, data: updated };
  }

  async remove(id: string) {
    await this.bookRepository.delete(id);
    return { message: `Book with id ${id} removed` };
  }
}
