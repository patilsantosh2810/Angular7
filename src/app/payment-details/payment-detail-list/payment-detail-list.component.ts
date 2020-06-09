import { Component, OnInit } from '@angular/core';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: []
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService,
    private toast: ToastrService ) { }

  ngOnInit(): void {

    this.service.refreshList();

  }

  populateForm(pd: PaymentDetail){
    this.service.formData = Object.assign({},pd);
  }

  onDelete(PMID){
    if(confirm('Are you sure to delete this record ?')){
    this.service.deletePaymentDetail(PMID).subscribe(
      res => {
        this.service.refreshList();
        this.toast.warning("Record Removed successfully","Payment Detail  Register");

      },
      err => {
        console.log(err);
      }
    )

  }
}

}
