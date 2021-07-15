import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/constants';
import { PaymentTypesEnum } from 'src/enums/paymentTypes.enum';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}

  store(data: {
    name: string;
    email: string | undefined;
    phone_number: string | undefined;
    address: string;
    notes: string | undefined;
    zip_code: string | undefined;
    payment_type: PaymentTypesEnum | undefined;
    product_id: string;
  }) {
    return this.http.post(
      `${apiUrl}/orders`,
      data,
    );
  }
}
