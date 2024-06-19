import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

  create(createProductDto: CreateProductDto) {
    const product = new Product();
    product.name = createProductDto.name;
    product.description = createProductDto.description;
    product.file = createProductDto.file;
    product.created = createProductDto.created;
    product.updated = createProductDto.updated;
    product.adminId = createProductDto.adminId;
    product.price = createProductDto.price;
    return this.productRepository.save(product);
  }

  findAll() {
    return this.productRepository.find();
  }

  findOne(id: number) { 
    return this.productRepository.findOneBy({ id });
  }
}
