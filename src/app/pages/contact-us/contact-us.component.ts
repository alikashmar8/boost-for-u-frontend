import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert.service';
import { UsersService } from 'src/app/users.service';
import { loadingGifUrl } from 'src/constants';
import { isEmail } from 'src/methods/methods';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  isSendingEmail: boolean;
  loadingGifUrl: string = loadingGifUrl;
  name: string;
  email: string;
  mobile: string;
  company: string;
  subject: string;
  message: string;

  constructor(
    private usersService: UsersService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {}

  sendEmail() {
    this.isSendingEmail = true;
    const data = {
      name: this.name,
      email: this.email,
      subject: this.subject,
      message: this.message,
      mobile: this.mobile,
      company: this.company,
    };

    if (
      !this.message ||
      !this.subject ||
      !this.email ||
      !isEmail(this.email) ||
      !this.name
    ) {
      alert('Please fill all values before sending');
      this.isSendingEmail = false;
      return;
    }

    this.usersService.sendEmail(data).subscribe(
      (res: any) => {
        console.log(res);
        this.alertService.success(
          'Message sent successfully we will contact you soon!'
        );
        this.name = '';
        this.email = '';
        this.subject = '';
        this.message = '';
        (this.company = ''), (this.mobile = '');
        this.isSendingEmail = false;
      },
      (error) => console.log(error)
    );
  }
}
