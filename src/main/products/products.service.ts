import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductsRepository } from './products.repository';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly productRepository: ProductsRepository) {}

  create(createProductDto: CreateProductDto): Promise<Product> {
    return this.productRepository.create(createProductDto);
  }

  findAll() {
    return this.productRepository.find({});
  }

  findById(id: string) {
    return this.productRepository.findById(id);
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productRepository.findByIdAndUpdate(id, updateProductDto);
  }

  remove(id: string) {
    return this.productRepository.deleteOne(id);
  }
}
