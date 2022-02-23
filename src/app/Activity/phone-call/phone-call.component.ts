import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-phone-call',
  templateUrl: './phone-call.component.html',
  styleUrls: ['./phone-call.component.css']
})
export class PhoneCallComponent implements OnInit {

  constructor(private bsModalRef:BsModalRef) { }

  ngOnInit(): void {
  }
  onClickCancel() {

    this.bsModalRef.hide();
  }
  
}
