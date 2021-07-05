import { Component, OnInit, PipeTransform } from '@angular/core';
import { OrdersService } from '../../services/orders.service';
import { AlertService } from '../../services/alert.service';
import { AuthService } from '../../services/auth.service';
import { User } from '../../../models/user.model';
import { Router } from '@angular/router';
import { Order } from '../../../models/order.model';
import { loadingGifUrl } from '../../../constants';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  currentUser: User | null;
  orders: Order[] = [];
  isLoading: boolean = false;
  search: string;
  orderToDeleteId: string;
  isDeleteLoading: boolean = false;
  loadingGifUrl: string = loadingGifUrl;

  constructor(
    private ordersService: OrdersService,
    private alertService: AlertService,
    private authService: AuthService,
    private router: Router,
    private ngbModal: NgbModal
  ) {
    this.currentUser = authService.currentUser;
    if (!authService.isAdmin()) {
      router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.ordersService.getAll().subscribe((res: any) => {
      this.orders = res;
      console.log(res);
      this.isLoading = false;
    });
  }

  delete() {
    this.isDeleteLoading = true;
    this.ordersService.delete(this.orderToDeleteId).subscribe(
      (res) => {
        console.log(res);
        this.isDeleteLoading = false;
        window.location.reload();
      },
      (exception) => {
        console.log(exception);
        this.alertService.error('Error deleting category');
      }
    );
  }

  open(content: any, id: any) {
    this.orderToDeleteId = id;
    this.ngbModal.open(content);
  }
}
