import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BsModalRef } from 'ngx-bootstrap/modal';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(
   public dialogRef: MatDialogRef<AppointmentComponent>
  ) { }



  ngOnInit(): void {
  }
  // onClickCancel() {

  //   this.bsModalRef.hide();
  // }
}


