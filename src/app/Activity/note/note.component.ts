import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,

    height: '14rem',
    minHeight: '1rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',


    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ]
  }




  constructor(private bsModalRef:BsModalRef) { }

  ngOnInit(): void {
  }
  onClickCancel() {

    this.bsModalRef.hide();
  }
}


