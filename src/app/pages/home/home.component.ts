import { Component } from '@angular/core';
import { EnquiryService } from 'src/app/core/services/enquiry.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
showEnquiryForm = false;

services = [
  {
    title: 'Safety Door',
    desc: 'Best safety doors for home purposes with durability.',
    img: 'assets/safetydoor1.png'
  },
  {
    title: 'Welding Services',
    desc: 'All types of welding work with precision and safety.',
    img: 'assets/stand.jpg'
  },
  {
    title: 'Metal Fabrication',
    desc: 'Custom metal fabrication with quality craftsmanship.',
    img: 'assets/metal.jpg'
  },
  {
    title: 'Installation',
    desc: 'Professional installation services.',
    img: 'assets/installation.jpg'
  },
  {
    title: 'Iron Gate',
    desc: 'Strong and stylish iron gates.',
    img: 'assets/gate2.png'
  },
  {
    title: 'Iron Grill',
    desc: 'Custom grills for windows and balconies.',
    img: 'assets/grill2.jpg'
  },
  {
    title: 'Roofing Shed',
    desc: 'MS and polycarbonate roofing shed solutions.',
    img: 'assets/shed.jpg'
  },
  {
    title: 'Repairing Work',
    desc: 'Iron repairing and maintenance services.',
    img: 'assets/weld.jpg'
  }
];


openEnquiryForm(serviceName: string) {
  this.enquiry.serviceType = serviceName;
  this.showEnquiryForm = true;
}


closeEnquiryForm() {
  this.showEnquiryForm = false;
}

loading = false;
success = false;
error = false;

enquiry = {
  name: '',
  mobile: '',
  serviceType: '',
  message: ''
};

constructor(private service: EnquiryService) {}

submit() {
  this.loading = true;
  this.error = false;

  this.service.saveEnquiry(this.enquiry).subscribe({
    next: () => {
      this.loading = false;
      this.success = true;

      // auto close after 2 sec
      setTimeout(() => {
        this.closeEnquiryForm();
        this.success = false;
        this.enquiry = {
          name: '',
          mobile: '',
          serviceType: '',
          message: ''
        };
      }, 2000);
    },
    error: () => {
      this.loading = false;
      this.error = true;
    }
  });
}


}
