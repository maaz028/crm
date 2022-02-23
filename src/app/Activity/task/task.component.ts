import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  constructor(private bsModalRef:BsModalRef) { }

  ngOnInit(): void {
  }
  onClickCancel() {

    this.bsModalRef.hide();
  }

}
