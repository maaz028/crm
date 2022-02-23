import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { AppointmentComponent } from 'src/app/Activity/appointment/appointment.component';
import { EmailComponent } from 'src/app/Activity/email/email.component';
import { NoteComponent } from 'src/app/Activity/note/note.component';
import { PhoneCallComponent } from 'src/app/Activity/phone-call/phone-call.component';
import { PostComponent } from 'src/app/Activity/post/post.component';
import { TaskComponent } from 'src/app/Activity/task/task.component';
import { CrmApiService } from 'src/app/crm-api.service';
import Swal from 'sweetalert2';

import { AllModulesService } from '../all-modules.service';
declare const $: any;
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  @ViewChild('phoneCall') phoneCall!: ElementRef<any>
  @ViewChild('appointment') appointment!: ElementRef<any>
  @ViewChild('task') task!: ElementRef<any>
  @ViewChild('note') note!: ElementRef<any>
  @ViewChild('post') post!: ElementRef<any>
  @ViewChild('email') email!: ElementRef<any>
  @ViewChild('taskModal') taskModal!: ElementRef<any>
  @ViewChild('emailModal') emailModal!: ElementRef<any>
  @ViewChild('activityTab') activityTab!: ElementRef<any>
  @ViewChild('taskCard') taskCard!: ElementRef<any>
  @ViewChild('phoneCallCard') phoneCallCard!: ElementRef<any>
  @ViewChild('appointmentCard') appointmentCard!: ElementRef<any>
  @ViewChild('emailCard') emailCard!: ElementRef<any>
  @ViewChild('noteCard') noteCard!: ElementRef<any>
  @ViewChild('postCard') postCard!: ElementRef<any>
  @ViewChild('activityBlock') activitBlock!: ElementRef<any>

  htmlContent = '';

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    width:'75vw',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [['bold']],
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
    ],
  };
  bsModalRef: BsModalRef;


  companySettingForm:any = FormGroup
  constructor( private modalService: BsModalService,
    private _obj:CrmApiService,
     private formBuilder:FormBuilder,
     public matDialog: MatDialog) { }

  display = '';
  display2 = 'none';
  display1 = 'none';
  handleDisplay='none'
  showBlocks() {
    this.display = '';
    this.display2 = 'none';
    this.display1 = 'none';
  }
  hideBlock() {
    this.display = 'none';
    this.display2 = 'none';
    this.display1 = '';
  }
  showBlock2() {
    this.display = 'none';
    this.display2 = '';
    this.display1 = 'none';
  }

  //Activity modal
  // openAppointmentModal() {
  //   this.bsModalRef = this.modalService.show(AppointmentComponent);

  // }




  openModal() {
    const dialogConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogConfig.disableClose = true;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "350px";
    dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(AppointmentComponent, dialogConfig);
  }

  openEmailModal() {
    this.bsModalRef = this.modalService.show(EmailComponent);
    this.bsModalRef.setClass("full-screen-modal");

    }
  openPhoneCallModal() {
    const config = {
      keyboard: true,

  };
    this.bsModalRef = this.modalService.show(PhoneCallComponent, config);
  }
  openTaskModal() {
    this.bsModalRef = this.modalService.show(TaskComponent);
  }
  openNoteModal() {
    this.bsModalRef = this.modalService.show(NoteComponent);
    this.bsModalRef.setClass("full-screen-modal");
  }
  openPostModal() {
    this.bsModalRef = this.modalService.show(PostComponent);
    this.bsModalRef.setClass("full-screen-modal");
  }



  enableFilter()
  {
    if (this.handleDisplay==='')
    {
      this.handleDisplay ='none'
    }
    else
    {
      this.handleDisplay =''
    }
  }

  companySettingData :any
  activityData:any
  activityDataSpecific:any
  activityTaskForm:any = FormGroup
  activityPhoneCall:any = FormGroup
  activityAppointment:any = FormGroup
  activityPost:any = FormGroup
  activityNote:any = FormGroup
  activityEmail:any = FormGroup

  ngOnInit(): void {
    this.companySettingForm = this.formBuilder.group({
      Code:['',{
        validators:[Validators.required]
      }],
      FirstName:['',{
        validators:[Validators.required]
      }],
      MiddleName:['',{
        validators:[Validators.required]
      }],
      LastName:['',{
        validators:[Validators.required]
      }],
      Company:['',{
        validators:[Validators.required]
      }],
      Title:['',{
        validators:[Validators.required]
      }],
      ContactFor:['',{
        validators:[Validators.required]
      }],
      SalesPersonCode:['',{
        validators:[Validators.required]
      }],
      CompanyCode:['',{
        validators:[Validators.required]
      }],
      PrimaryAddressCode:['',{
        validators:[Validators.required]
      }],
      PriAddress:['',{
        validators:[Validators.required]
      }],
      PriCity:['',{
        validators:[Validators.required]
      }],
      PriState:['',{
        validators:[Validators.required]
      }],
      PriPostalCode:['',{
        validators:[Validators.required]
      }],
      PriPhone1:['',{
        validators:[Validators.required]
      }],
      PriPhone2:['',{
        validators:[Validators.required]
      }],
      PriPhone3:['',{
        validators:[Validators.required]
      }],
      PriFax:['',{
        validators:[Validators.required]
      }],
      PriUPSZone:['',{
        validators:[Validators.required]
      }],
      PriCountryCode:['',{
        validators:[Validators.required]
      }],
      PriShippingCode:['',{
        validators:[Validators.required]
      }],
      PriContactPerson:['',{
        validators:[Validators.required]
      }],
      ShippingAddressCode:['',{
        validators:[Validators.required]
      }],
      ShipAddress:['',{
        validators:[Validators.required]
      }],
      ShipCity:['',{
        validators:[Validators.required]
      }],
      ShipState:['',{
        validators:[Validators.required]
      }],
      ShipPostalCode:['',{
        validators:[Validators.required]
      }],
      ShipPhone1:['',{
        validators:[Validators.required]
      }],
      ShipPhone2:['',{
        validators:[Validators.required]
      }],
      ShipPhone3:['',{
        validators:[Validators.required]
      }],
      ShipFax:['',{
        validators:[Validators.required]
      }],
      ShipUPSZone:['',{
        validators:[Validators.required]
      }],
      ShipCountryCode:['',{
        validators:[Validators.required]
      }],
      ShipShippingCode:['',{
        validators:[Validators.required]
      }],
      ShipContactPerson:['',{
        validators:[Validators.required]
      }],
      Name:['',{
        validators:[Validators.required]
      }],
      PhoneNo:['',{
        validators:[Validators.required]
      }],
      Email:['',{
        validators:[Validators.required]
      }],
      Commission:['',{
        validators:[Validators.required]
      }],
      NewTaskDate:['',{
        validators:[Validators.required]
      }],
    })

    this.activityTaskForm = this.formBuilder.group({
      CreatedBy:["",{
        validators:[Validators.required]
      }],
      Subject:["",{
        validators:[Validators.required]
      }],
      Description:["",{
        validators:[Validators.required]
      }],
      AppStartDateTime:["",{
        validators:[Validators.required]
      }],
      Regarding:["",{
        validators:[Validators.required]
      }],
      Duration:["30",{
        validators:[Validators.required]
      }],
      Priority:["",{
        validators:[Validators.required]
      }],
      Code:["",{
        validators:[Validators.required]
      }],

    })
    this.activityPhoneCall = this.formBuilder.group({
      CreatedBy:["",{
        validators:[Validators.required]
      }],
      Subject:["",{
        validators:[Validators.required]
      }],
      FromAddress:["",{
        validators:[Validators.required]
      }],
      ToAddress:["",{
        validators:[Validators.required]
      }],
      CallDirection:["Outgoing",{
        validators:[Validators.required]
      }],
      CallPhone:["",{
        validators:[Validators.required]
      }],
      Description:["",{
        validators:[Validators.required]
      }],
      Duration:["30",{
        validators:[Validators.required]
      }],
      CallDue:["",{
        validators:[Validators.required]
      }],
      Priority:["Normal",{
        validators:[Validators.required]
      }],
      Regarding:["",{
        validators:[Validators.required]
      }],

    })
    this.activityAppointment = this.formBuilder.group({
      CreatedBy:["",{
        validators:[Validators.required]
      }],
      Body:["",{
        validators:[Validators.required]
      }],
      AppOptionalAttendees:["",{
        validators:[Validators.required]
      }],
      Subject:["",{
        validators:[Validators.required]
      }],
      AppLocation:["",{
        validators:[Validators.required]
      }],
      AppStartDateTime:["",{
        validators:[Validators.required]
      }],
      AppEndDateTime:["",{
        validators:[Validators.required]
      }],
      AppIsAllDayEvent:[true,{
        validators:[Validators.required]
      }],
      Duration:["30",{
        validators:[Validators.required]
      }],
      Description:["",{
        validators:[Validators.required]
      }],

    })

    this.activityPost = this.formBuilder.group({
      Subject:['',{
        validators:[Validators.required]
      }],
      Body:['',{
        validators:[Validators.required]
      }],
    })
    this.activityEmail = this.formBuilder.group({
      FromAddress:['',{
        validators:[Validators.required]
      }],
      ToAddress:['',{
        validators:[Validators.required]
      }],
      EmailCC:['',{
        validators:[Validators.required]
      }],
      EmailBCC:['',{
        validators:[Validators.required]
      }],
      Subject:['',{
        validators:[Validators.required]
      }],
      Body:['',{
        validators:[Validators.required]
      }],
      Regarding:['',{
        validators:[Validators.required]
      }],
      Duration:['30',{
        validators:[Validators.required]
      }],
    })
    this._obj.getContactsData('C005').subscribe(data=>
      {
        this.companySettingData = data
      })
  this.getActivityData()
  }
  getActivityData()
  {
    this._obj.getActivityData().subscribe((data:any)=>
    {
      this.activityData = data 
      console.log(this.specificContactCode)
      if(this.specificContactCode!=undefined)
      {
        this.filterActivityUponSave()

      }
    })
  }
  ngAfterViewInit():void{
    this.taskCard.nativeElement.style.display = ''
    this.phoneCallCard.nativeElement.style.display = 'none'
    this.appointmentCard.nativeElement.style.display = 'none'
    this.emailCard.nativeElement.style.display = 'none'
    this.postCard.nativeElement.style.display = 'none'
    this.noteCard.nativeElement.style.display = 'none'
  }
  showUpdate='none'
  showSubmit='none'
  enableInput=true

  populateForm()
  {
    this.companySettingForm.patchValue({
      'Code':this.specificCompanyData[0].Code,
      'FirstName':this.specificCompanyData[0].FirstName,
      'MiddleName':this.specificCompanyData[0].MiddleName,
      'LastName':this.specificCompanyData[0].LastName,
      'Company':this.specificCompanyData[0].Company,
      'Title':this.specificCompanyData[0].Title,
      'ContactFor':this.specificCompanyData[0].ContactFor,
      'SalesPersonCode':this.specificCompanyData[0].SalesPersonCode,
      'CompanyCode':this.specificCompanyData[0].CompanyCode,
      'PrimaryAddressCode':this.specificCompanyData[0].PrimaryAddressCode,
      'PriAddress':this.specificCompanyData[0].PriAddress,
      'PriCity':this.specificCompanyData[0].PriCity,
      'PriState':this.specificCompanyData[0].PriState,
      'PriPostalCode':this.specificCompanyData[0].PriPostalCode,
      'PriPhone1':this.specificCompanyData[0].PriPhone1,
      'PriPhone2':this.specificCompanyData[0].PriPhone2,
      'PriPhone3':this.specificCompanyData[0].PriPhone3,
      'PriFax':this.specificCompanyData[0].PriFax,
      'PriUPSZone':this.specificCompanyData[0].PriUPSZone,
      'PriCountryCode':this.specificCompanyData[0].PriCountryCode,
      'PriShippingCode':this.specificCompanyData[0].PriShippingCode,
      'PriContactPerson':this.specificCompanyData[0].PriContactPerson,
      'ShippingAddressCode':this.specificCompanyData[0].ShippingAddressCode,
      'ShipAddress':this.specificCompanyData[0].ShipAddress,
      'ShipCity':this.specificCompanyData[0].ShipCity,
      'ShipState':this.specificCompanyData[0].ShipState,
      'ShipPostalCode':this.specificCompanyData[0].ShipPostalCode,
      'ShipPhone1':this.specificCompanyData[0].ShipPhone1,
      'ShipPhone2':this.specificCompanyData[0].ShipPhone2,
      'ShipPhone3':this.specificCompanyData[0].ShipPhone3,
      'ShipFax':this.specificCompanyData[0].ShipFax,
      'ShipUPSZone':this.specificCompanyData[0].ShipUPSZone,
      'ShipCountryCode':this.specificCompanyData[0].ShipCountryCode,
      'ShipShippingCode':this.specificCompanyData[0].ShipShippingCode,
      'ShipContactPerson':this.specificCompanyData[0].ShipContactPerson,
      'Name':this.specificCompanyData[0].SPName,
      'PhoneNo':this.specificCompanyData[0].SPPhoneNo,
      'Email':this.specificCompanyData[0].SPEmail,
      'Commission':this.specificCompanyData[0].SPCommission,
      'NewTaskDate':this.specificCompanyData[0].SPNewTaskDate,

    })
  }

 
  specificCompanyData:any
  contactStatus:any
  firstBlock:any = '8'
  contactCode:any
  contactName:any
  populateCompanyForm(value:any)
  {
  
    this.specificContactCode = value
    this.contactStatus = 'View - Contact Form '
    this.activityTab.nativeElement.style.display = 'inline'
    console.log(value)
    this.specificCompanyData = this.companySettingData.filter((res)=>
      {
        return res.Code.match(value)
      })
      this.contactCode = this.specificCompanyData[0].Code
      this.contactName = this.specificCompanyData[0].FirstName
      console.log('specific person data ,',this.specificCompanyData)
      this.enableInput = true
      this.showUpdate = 'none'
      this.showSubmit = 'none'
      this.populateForm()
      this.filterTaskName = 'Appointment'
      this.filterActivity('1')
  }

  openNewCompanyForm()
  {
    this.contactStatus = 'New - Contact Form '
    console.log(this.activitBlock.nativeElement)
    this.activitBlock.nativeElement.style.display = 'none'
    this.enableInput = false
    this.showUpdate = 'none'
    this.showSubmit = ''
    this.companySettingForm.reset()
    this.firstBlock = '12'
  }
  openEditCurrentCompanyForm()
  {
    this.activitBlock.nativeElement.style.display = 'block'
    this.contactStatus = 'Edit - Contact Form '
    this.populateForm()
    this.enableInput = false
    this.showUpdate = ''
    this.showSubmit = 'none'
    this.firstBlock = '8'
  }
  userObject(object)
  {
    const companyObj = {
      "code":object.Code,
      "FirstName":object.FirstName,
      "MiddleName":object.MiddleName,
      "LastName":object.LastName,
      "Company":object.Company,
      "Title":object.Title,
      "ContactFor":object.ContactFor,
      "SalesPersonCode":object.SalesPersonCode,
      "CompanyCode":object.CompanyCode,
      "primaryAddressCode":object.PrimaryAddressCode,
      "shippingAddressCode":object.ShippingAddressCode,
      "createdBy": "Saleem",
      "editedBy": "saleem",
      "objPrimaryAddess":{
        "companyCode":object.CompanyCode,
        "addressCode":object.PrimaryAddressCode,
        "address":object.PriAddress,
        "city":object.PriCity,
        "state":object.PriState,
        "postalCode":object.PriPostalCode,
        "phone1":object.PriPhone1,
        "phone2":object.PriPhone2,
        "phone3":object.PriPhone3,
        "fax":object.PriFax,
        "upsZone":object.PriUPSZone,
        "countryCode":object.PriCountryCode,
        "shippingCode":object.PriShippingCode,
        "contactPerson":object.PriContactPerson,
        "createdBy": "Saleem",
        "editedBy": "saleem",
      },
      "objShippingAddress":{
        "companyCode":object.CompanyCode,
        "addressCode":object.ShippingAddressCode,
        "address":object.ShipAddress,
        "city":object.ShipCity,
        "state":object.ShipState,
        "postalCode":object.ShipPostalCode,
        "phone1":object.ShipPhone1,
        "phone2":object.ShipPhone2,
        "phone3":object.ShipPhone3,
        "fax":object.ShipFax,
        "upsZone":object.ShipUPSZone,
        "countryCode":object.ShipCountryCode,
        "shippingCode":object.ShipShippingCode,
        "contactPerson":object.ShipContactPerson,
        "createdBy": "Saleem",
        "editedBy": "saleem",
      },
      "objSalesPerson":{
        'code':object.Code,
        'name':object.Name,
        'phoneNo':object.PhoneNo,
        'email':object.Email,
        'commission':object.Commission,
        'newTaskDate':object.NewTaskDate,
        'companyCode':object.CompanyCode,
        "createdBy": "Saleem",
        "editedBy": "saleem",
      }

    }
console.log(companyObj)
    return companyObj
  }
  updateCurrentCompanyData(value:NgForm)
  {

    this._obj.postContactsData(this.userObject(value.value)).subscribe(res=>
      {
       Swal.fire('Data Updated Successfully','','success')
       .then(()=>
       {
         window.location.reload()
       })
      })
  }
  addNewCompanyData(value:NgForm)
  {

    this._obj.postContactsData(this.userObject(value.value)).subscribe(res=>
      {
        console.log(res)
        Swal.fire('Data Submitted Successfully','','success')
        .then(()=>
        {
          window.location.reload()
        })
      })
  }
  public activityId:any = 0
  populateActivityForm(id,code,activityType)
  {

    let specificActivityData = this.activityData.filter(res=>
      {
        return res.MasterCode===code && res.ID===id && res.ActivityType===activityType 
      })
     let appStartDate = specificActivityData[0]?.AppStartDateTime?.split('T')[0]
     let callDue = specificActivityData[0]?.CallDue?.split('T')[0]
     let appEndDate = specificActivityData[0]?.AppEndDateTime?.split('T')[0]
     this.activityId = id

    this.activityAppointment.patchValue({
      'CreatedBy': specificActivityData[0].CreatedBy,
      'Body': specificActivityData[0].Body,
      'AppOptionalAttendees': specificActivityData[0].AppOptionalAttendees,
      'Subject': specificActivityData[0].Subject,
      'AppLocation': specificActivityData[0].AppLocation,
      'AppStartDateTime': appStartDate,
      'AppEndDateTime': appEndDate,
      'AppIsAllDayEvent': specificActivityData[0].AppIsAllDayEvent,
      'Duration': specificActivityData[0].Duration,
      'Description': specificActivityData[0].Description, 
    })
    this.activityTaskForm.patchValue({
      'CreatedBy': specificActivityData[0].CreatedBy,
      'Subject': specificActivityData[0].Subject,
      'Description': specificActivityData[0].Description,
      'AppStartDateTime': appStartDate,
      'Regarding': specificActivityData[0].Regarding,
      'Duration': specificActivityData[0].Duration,
      'Priority': specificActivityData[0].Priority,
      'Code': specificActivityData[0].Code,
    })
    this.activityPhoneCall.patchValue({
      'CreatedBy': specificActivityData[0].CreatedBy,
      'Subject': specificActivityData[0].Subject,
      'FromAddress': specificActivityData[0].FromAddress,
      'ToAddress': specificActivityData[0].ToAddress,
      'CallDirection': specificActivityData[0].CallDirection,
      'CallPhone': specificActivityData[0].CallPhone,
      'Description': specificActivityData[0].Description,
      'Duration': specificActivityData[0].Duration,
      'CallDue': callDue,
      'Priority': specificActivityData[0].Priority,
      'Regarding': specificActivityData[0].Regarding,
    })
    this.activityEmail.patchValue({
      'FromAddress': specificActivityData[0].FromAddress,
      'ToAddress': specificActivityData[0].ToAddress,
      'EmailCC': specificActivityData[0].EmailCC,
      'EmailBCC': specificActivityData[0].EmailBCC,
      'Subject': specificActivityData[0].Subject,
      'Body': specificActivityData[0].Body,
      'Regarding': specificActivityData[0].Regarding,
      'Duration': specificActivityData[0].Duration,
    })
    this.activityEmail.patchValue({
      'Subject': specificActivityData[0].Subject,
      'Body': specificActivityData[0].Body,
    })
    
    
  }
  taskName:any
  openPhoneCall(id?, code?, activityType?)
  {
    this.taskName = 'Phone Call'
    this.appointment.nativeElement.style.display = 'none'
    this.task.nativeElement.style.display = 'none'
    this.phoneCall.nativeElement.style.display = 'flex'
    if(id)
    {
     this.populateActivityForm(id,code,activityType)
    }
  }
  openAppointment(id?, code?, activityType?)
  {
    
    this.taskName = 'Appointment'
    console.log(id)
    this.phoneCall.nativeElement.style.display = 'none'
    this.task.nativeElement.style.display = 'none'
    this.appointment.nativeElement.style.display = 'flex'
    if(id)
    {
     this.populateActivityForm(id,code,activityType)
    }
  }

  openTask(id?, code?, activityType?)
  {
    console.log(id)
    this.taskName = 'Task'
    this.phoneCall.nativeElement.style.display = 'none'
    this.appointment.nativeElement.style.display = 'none'
    this.task.nativeElement.style.display = 'flex'
    this.activityTaskForm.patchValue({
      'Code':this.specificCompanyData[0]?.Code
    })
    if(id)
    {
     this.populateActivityForm(id,code,activityType)
    }
  }

  openEmail(id?, code?, activityType?)
  {
    this.taskName = 'Email'
    this.note.nativeElement.style.display = 'none'
    this.post.nativeElement.style.display = 'none'
    this.email.nativeElement.style.display = 'flex'
    if(id)
    {
     this.populateActivityForm(id,code,activityType)
    }
  }

  openNote(id?, code?, activityType?)
  {
    this.taskName = 'Note'
    this.note.nativeElement.style.display = 'flex'
    this.post.nativeElement.style.display = 'none'
    this.email.nativeElement.style.display = 'none'
    if(id)
    {
     this.populateActivityForm(id,code,activityType)
    }

  }

  openPost(id?, code?, activityType?)
  {
    this.taskName = 'Post'
    this.note.nativeElement.style.display = 'none'
    this.post.nativeElement.style.display = 'flex'
    this.email.nativeElement.style.display = 'none'
    if(id)
    {
     this.populateActivityForm(id,code,activityType)
    }
  }

  activityObject(object)
  {
    if(this.taskName === 'Phone Call')
    {
      this.taskName = this.taskName.split(' ')
      this.taskName = this.taskName[0]+this.taskName[1]

    }
    const activityObj = {
      'CompanyCode': object.CompanyCode?object.CompanyCode:'',
      'MasterType': 'Contact',
      'MasterCode': this.specificCompanyData[0]?.Code,
      'Code': this.specificCompanyData[0]?.Code,
      'Description': object.Description?object.Description:'',
      'ActivityType': this.taskName,
      'FromAddress': object.FromAddress?object.FromAddress:'',
      'ToAddress': object.ToAddress?object.ToAddress:'',
      'Subject': object.Subject?object.Subject:'',
      'Body': object.Body?object.Body:'',
      'AppOptionalAttendees': object.AppOptionalAttendees?object.AppOptionalAttendees:'',
      'AppLocation': object.AppLocation?object.AppLocation:'',
      'AppStartDateTime': object.AppStartDateTime?object.AppStartDateTime:'2022-02-04T00:00:00',
      'AppEndDateTime': object.AppEndDateTime?object.AppEndDateTime:'2022-02-04T00:00:00',
      'AppIsAllDayEvent': object.AppIsAllDayEvent?object.AppIsAllDayEvent:true,
      'EmailCC': object.EmailCC?object.EmailCC:'',
      'EmailBCC': object.EmailBCC?object.EmailBCC:'',
      'CallDirection': object.CallDirection?object.CallDirection:'',
      'CallPhone': object.CallPhone?object.CallPhone:'',
      'CallDue': object.CallDue?object.CallDue:'2022-02-04T00:00:00',
      'Duration': object.Duration?object.Duration:'',
      'Regarding': object.Regarding?object.Regarding:'',
      'Priority': object.Priority?object.Priority:'',
      'CreatedBy': object.CreatedBy?object.CreatedBy:'',
      'EditedBy': object.EditedBy?object.EditedBy:'',
      'ID':object.ID?object.ID:this.activityId
    }

    return activityObj
  }

  submitTaskActivity(value:NgForm)
  {
    if(this.activityId === 0)
    {
      this._obj.postActivityData(this.activityObject(value.value)).subscribe(res=>
        {
          console.log(res)
          Swal.fire('Task Added Successfully','','success')
          .then(()=>
          {
            this.taskModal.nativeElement.click()
            this.getActivityData()
          })
        })
    }
    else if(this.activityId != 0)
    {
      this._obj.postActivityData(this.activityObject(value.value)).subscribe(res=>
        {
          Swal.fire('Task Updated Successfully','','success')
          .then(()=>
          {
            this.taskModal.nativeElement.click()
            this.getActivityData()
            this.activityId=0
          })
        })
    }
    
  }

  submitAppointmentActivity(value:NgForm)
  {
    console.log(this.activityObject(value.value))
    if(this.activityId === 0)
    {
      this._obj.postActivityData(this.activityObject(value.value)).subscribe(res=>
        {
          Swal.fire('Appointment Activity Added Successfully','','success')
          .then(()=>
          {
            this.taskModal.nativeElement.click()
            this.getActivityData()
            
          })
        })
    }
    else if(this.activityId!=0){
      this._obj.postActivityData(this.activityObject(value.value)).subscribe(res=>
        {
          Swal.fire('Appointment Activity Updated Successfully','','success')
          .then(()=>
          {
            this.taskModal.nativeElement.click()
            this.getActivityData()
            this.activityId=0
          })
        })
    }
   
  }
  submitPhoneCallActivity(value:NgForm)
  {
    console.log(this.activityObject(value.value))
    
   
    this._obj.postActivityData(this.activityObject(value.value)).subscribe(res=>
      {
        if(this.activityId === 0)
    {
      Swal.fire('Phone Call Activity Added Successfully','','success')
      .then(()=>
      {
        this.taskModal.nativeElement.click()
        this.getActivityData()
      })
    }
    else if(this.activityId!=0)
    {
      Swal.fire('Phone Call Activity Updated Successfully','','success')
      .then(()=>
      {
        this.taskModal.nativeElement.click()
        this.getActivityData()
        this.activityId=0
      })
    }
        
      })
  }

  submitPostActivity(values:NgForm)
  {
    this._obj.postActivityData(this.activityObject(values.value)).subscribe(res=>
      {
        if(this.activityId===0)
        {
          Swal.fire('Post Activity Added Successfully','','success')
          .then(()=>
          {
            this.emailModal.nativeElement.click()
            this.getActivityData()
          })
        }
        else if(this.activityId!=0)
        {
          Swal.fire('Post Activity Updated Successfully','','success')
          .then(()=>
          {
            this.emailModal.nativeElement.click()
            this.getActivityData()
            this.activityId = 0
          })
        }
       
      })
  }
  submitNoteActivity(values:NgForm)
  {
    this._obj.postActivityData(this.activityObject(values.value)).subscribe(res=>
      {
        if(this.activityId === 0)
        {
          Swal.fire('Note Activity Added Successfully','','success')
        .then(()=>
        {
          this.emailModal.nativeElement.click()
          this.getActivityData()
        })
        }
        else if(this.activityId!=0)
        {
          Swal.fire('Note Activity Updated Successfully','','success')
        .then(()=>
        {
          this.emailModal.nativeElement.click()
          this.getActivityData()
          this.activityId = 0
        })
        }
        
      })
  }
  submitEmailActivity(values:NgForm)
  {
    this._obj.postActivityData(this.activityObject(values.value)).subscribe(res=>
      {
        if(this.activityId === 0)
        {
          Swal.fire('Email Activity Added Successfully','','success')
          .then(()=>
          {
            this.emailModal.nativeElement.click()
            this.getActivityData()
          })
        }
      else if(this.activityId != 0)
        {
          Swal.fire('Email Activity Updated Successfully','','success')
          .then(()=>
          {
            this.emailModal.nativeElement.click()
            this.getActivityData()
            this.activityId = 0
          })
        }
        
      })
  }

  filterTaskName:any = 'Appointment'
  specificContactCode:any
  filterActivity(activityType)
  {
    console.log(this.activityData,' ',this.specificContactCode)
    this.activityDataSpecific = this.activityData.filter(res=>
      {
        return res.ActivityType === activityType && res.MasterCode === this.specificContactCode
      })
      console.log(this.activityDataSpecific)
  }
  filterActivityUponSave()
  {
    if(this.taskName === 'Email')
    {
      this.filterActivity('2')
    }
    else if(this.taskName === 'PhoneCall')
    {
      this.filterActivity('3')
    }
    else if(this.taskName === 'Appointment')
    {
      this.filterActivity('1')
    }
    else if(this.taskName === 'Task')
    {
      this.filterActivity('4')
    }
    else if(this.taskName === 'Note')
    {
      this.filterActivity('5')
    }
    else if(this.taskName === 'Post')
    {
      this.filterActivity('6')
    }
  }
  filterByAppointment()
  {
    this.filterTaskName = 'Appointment'
    this.taskCard.nativeElement.style.display = ''
    this.phoneCallCard.nativeElement.style.display = 'none'
    this.appointmentCard.nativeElement.style.display = 'none'
    this.emailCard.nativeElement.style.display = 'none'
    this.postCard.nativeElement.style.display = 'none'
    this.noteCard.nativeElement.style.display = 'none'
    this.filterActivity('1')
  }
 
  filterByPhoneCall()
  {
    this.filterTaskName = 'Phone Call'
    this.taskCard.nativeElement.style.display = 'none'
    this.phoneCallCard.nativeElement.style.display = ''
    this.appointmentCard.nativeElement.style.display = 'none'
    this.emailCard.nativeElement.style.display = 'none'
    this.postCard.nativeElement.style.display = 'none'
    this.noteCard.nativeElement.style.display = 'none'
    this.filterActivity('3')
  }
  filterByTask()
  {
    this.filterTaskName = 'Task'
    this.taskCard.nativeElement.style.display = 'none'
    this.phoneCallCard.nativeElement.style.display = 'none'
    this.appointmentCard.nativeElement.style.display = ''
    this.emailCard.nativeElement.style.display = 'none'
    this.postCard.nativeElement.style.display = 'none'
    this.noteCard.nativeElement.style.display = 'none'
    this.filterActivity('4')
  }
  filterByEmail()
  {
    this.filterTaskName = 'Email'
    this.taskCard.nativeElement.style.display = 'none'
    this.phoneCallCard.nativeElement.style.display = 'none'
    this.appointmentCard.nativeElement.style.display = 'none'
    this.emailCard.nativeElement.style.display = ''
    this.postCard.nativeElement.style.display = 'none'
    this.noteCard.nativeElement.style.display = 'none'
    this.filterActivity('2')
  }
  filterByPost()
  {
    this.filterTaskName = 'Post'
    this.taskCard.nativeElement.style.display = 'none'
    this.phoneCallCard.nativeElement.style.display = 'none'
    this.appointmentCard.nativeElement.style.display = 'none'
    this.emailCard.nativeElement.style.display = 'none'
    this.postCard.nativeElement.style.display = ''
    this.noteCard.nativeElement.style.display = 'none'
    this.filterActivity('6')
  }
  filterByNote()
  {
    this.filterTaskName = 'Note'
    this.taskCard.nativeElement.style.display = 'none'
    this.phoneCallCard.nativeElement.style.display = 'none'
    this.appointmentCard.nativeElement.style.display = 'none'
    this.emailCard.nativeElement.style.display = 'none'
    this.postCard.nativeElement.style.display = 'none'
    this.noteCard.nativeElement.style.display = ''
    this.filterActivity('5')
  }
}
