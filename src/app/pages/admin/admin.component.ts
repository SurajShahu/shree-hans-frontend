import { Component, OnInit } from '@angular/core';
import { EnquiryService } from 'src/app/core/services/enquiry.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  enquiries: any[] = [];   // 👈 YE LINE MISSING THI

  constructor(private service: EnquiryService) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.enquiries = data;
    });
  }
}
