import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css'],
})
export class CreateUserComponent implements OnInit {
  display = 'none';
  display2 = 'none';
  showBlocks() {
    this.display = '';
    this.display2 = 'none';
  }
  hideBlock() {
    this.display = 'none';
    this.display2 = 'none';
  }
  showBlock2() {
    this.display = 'none';
    this.display2 = '';
  }
  lstFees: any = [
    {
      UserID: 'dan1',
      EmailID: 'dan1@yahoo.com',
    },
    {
      UserID: 'mam1',
      EmailID: 'mam1@yahoo.com',
    },
    {
      UserID: 'dshan1',
      EmailID: 'dshan1@yahoo.com',
    },
    {
      UserID: 'gman1',
      EmailID: 'gman1@yahoo.com',
    },
    {
      UserID: 'gman1',
      EmailID: 'dan1@yahoo.com',
    },
    {
      UserID: 'tan1',
      EmailID: 'tan1@yahoo.com',
    },
    {
      UserID: 'dkhan1',
      EmailID: 'dkhan1@yahoo.com',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

