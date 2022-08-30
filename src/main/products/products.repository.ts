import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, isValidObjectId } from 'mongoose';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsRepository {
  constructor(
    @InjectModel(Product.name) private readonly productModel: Model<Product>,
  ) {}

  async findOne(id: string): Promise<Product> {
    let product: Product;

    if (!product) {
      if (isValidObjectId(id)) product = await this.productModel.findById(id);
      else {
        throw new UnprocessableEntityException(`Invalid ID`);
      }
    }

    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async find(productFilterQuery: FilterQuery<Product>): Promise<Product[]> {
    return this.productModel.find(productFilterQuery);
  }

  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  async findByIdAndUpdate(
    id: string,
    product: Partial<Product>,
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, product);
  }

  async deleteOne(productId: string) {
    if (isValidObjectId(productId)) {
      const { deletedCount } = await this.productModel.deleteOne({
        _id: productId,
      });
      if (deletedCount === 0) {
        throw new BadRequestException(
          `Product with id: "${productId}" not found.`,
        );
      }
    } else {
      throw new UnprocessableEntityException(`Invalid ID`);
    }
    return;
  }
}
