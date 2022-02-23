import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor( private bsModalRef:BsModalRef) { }

  ngOnInit(): void {
  }
  onClickCancel() {

    this.bsModalRef.hide();
  }
}


