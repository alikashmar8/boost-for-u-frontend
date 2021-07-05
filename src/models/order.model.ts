import { Product } from './product.model';
// import { PaymentTypesEnum } from '../enums/payment-types.enum';

export class Order {
  id?: string;
  name?: string;
  address?: string;
  email?: string;
  phone_number?: string;
  // payment_type: PaymentTypesEnum;
  zip_code?: string;
  notes?: string;
  product?: Product;
  product_id?: string;
  create_at?: Date;
}
