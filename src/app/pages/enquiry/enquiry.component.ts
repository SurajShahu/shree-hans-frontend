import { Component } from '@angular/core';
import { Enquiry } from 'src/app/core/models/enquiry';
import { EnquiryService } from 'src/app/core/services/enquiry.service';


@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.css']
})
export class EnquiryComponent {

  enquiry: Enquiry = {
    name: '',
    mobile: '',
    serviceType: '',
    message: ''
  };

  constructor(private service: EnquiryService) {}

  submit() {
    this.service.saveEnquiry(this.enquiry).subscribe({
      next: () => {
        alert('Enquiry submitted successfully');
        this.enquiry = {
          name: '',
          mobile: '',
          serviceType: '',
          message: ''
        };
      },
      error: () => {
        alert('Something went wrong');
      }
    });
  }
}
