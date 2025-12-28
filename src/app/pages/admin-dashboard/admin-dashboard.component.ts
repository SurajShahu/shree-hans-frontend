import { Component } from "@angular/core";
import { EnquiryService } from "src/app/core/services/enquiry.service";

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent {

  adminName: string = '';
  enquiries: any[] = [];

  constructor(private service: EnquiryService) {}

  ngOnInit() {
    this.loadEnquiries();
    const admin = JSON.parse(localStorage.getItem('admin')!);
    this.adminName = admin?.name;
  }

  loadEnquiries() {
    this.service.getAll().subscribe(res => {
      this.enquiries = res as any[];
    });
  }
}
