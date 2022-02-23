import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-create-companiesr',
  templateUrl: './create-companiesr.component.html',
  styleUrls: ['./create-companiesr.component.css'],
})
export class CreateCompaniesrComponent implements OnInit {
  
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
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action'
    },
    {
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action',
    },
    {
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action'
    },
    {
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action'
    },
    {
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action'
    },
    {
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action'
    },
    {
      Name: 'vally',
      phone: '8956758',
      Street:'RVN road',
      Email:'dan1@yahoo.com',
      Action:'action'
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
