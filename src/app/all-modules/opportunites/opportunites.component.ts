import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-opportunites',
  templateUrl: './opportunites.component.html',
  styleUrls: ['./opportunites.component.css'],
})
export class OpportunitesComponent implements OnInit {
  display = '';
  display2 = 'none';
  showBlocks() {
    this.display = 'none';
    this.display2 = '';
  }
  hideBlock() {
    this.display = '';
    this.display2 = 'none';
  }

  handleDisplay = 'none';
  constructor() {}

  ngOnInit(): void {}
  enableFilter() {
    if (this.handleDisplay === '') {
      this.handleDisplay = 'none';
    } else {
      this.handleDisplay = '';
    }
  }

  //hide or show filter

  lstFees: any = [
    {
      NO: 'OP00001',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00002',
      CreationDate: '4/28/2021',
      Description: 'Assembling furniture',
      contact: 'CT0002',
      Sales: 'JO',
    },
    {
      NO: 'OP00034',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00001',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00002',
      CreationDate: '4/28/2021',
      Description: 'Assembling furniture',
      contact: 'CT0002',
      Sales: 'JO',
    },
    {
      NO: 'OP00034',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00001',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00002',
      CreationDate: '4/28/2021',
      Description: 'Assembling furniture',
      contact: 'CT0002',
      Sales: 'JO',
    },
    {
      NO: 'OP00034',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00001',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
    {
      NO: 'OP00002',
      CreationDate: '4/28/2021',
      Description: 'Assembling furniture',
      contact: 'CT0002',
      Sales: 'JO',
    },
    {
      NO: 'OP00034',
      CreationDate: '1/28/2021',
      Description: 'Outgoing phone call',
      contact: 'CT00023',
      Sales: 'BC',
    },
  ];
}

