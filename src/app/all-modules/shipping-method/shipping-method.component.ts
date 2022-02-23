import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { CrmApiService } from 'src/app/crm-api.service';
import Swal from 'sweetalert2';
import swal from 'sweetalert2';
export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-shipping-method',
  templateUrl: './shipping-method.component.html',
  styleUrls: ['./shipping-method.component.css']
})
export class ShippingMethodComponent implements OnInit {

 
  companySettingForm:any = FormGroup
  constructor(private _obj:CrmApiService, private formBuilder:FormBuilder) { }
 
   display = 'none';
  display2 = 'none';
  handleDisplay='none'
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
  ngOnInit(): void {
    this.companySettingForm = this.formBuilder.group({
      Code:['',{
        validators:[Validators.required]
      }],
      Name:['',{
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
      VATNo:['',{
        validators:[Validators.required]
      }],
      SupplimentaryVATNo:['',{
        validators:[Validators.required]
      }],
    
    })

    this._obj.getCompanySettingData().subscribe(data=>
      {
        this.companySettingData = data
        console.log(this.companySettingData)
      })

  }

  showUpdate='none'
  showSubmit='none'
  enableInput=true

  populateForm()
  {
    this.companySettingForm.patchValue({
      'Code':this.specificCompanyData[0].Code,
      'Name':this.specificCompanyData[0].Name,
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
      'VATNo':this.specificCompanyData[0].VATNo,
      'SupplimentaryVATNo':this.specificCompanyData[0].SupplimentaryVATNo,
    })
  }
  specificCompanyData:any
  populateCompanyForm(value:any)
  {
    console.log(value)
    this.specificCompanyData = this.companySettingData.filter((res)=>
      {
        return res.Code.match(value)
      })
      console.log('specific person data ,',this.specificCompanyData[0].Code)
      this.enableInput = true
      this.showUpdate = 'none'
      this.showSubmit = 'none'
      this.populateForm()
   
  }

  openNewCompanyForm()
  {
    this.enableInput = false
    this.showUpdate = 'none'
    this.showSubmit = ''
    this.companySettingForm.reset()
  }
  openEditCurrentCompanyForm()
  {
    this.populateForm()
    this.enableInput = false
    this.showUpdate = ''
    this.showSubmit = 'none'
  }
  userObject(object)
  {
    const companyObj = {
      "code":object.Code,
      "name":object.Name,
      "primaryAddressCode":object.PrimaryAddressCode,
      "shippingAddressCode":object.ShippingAddressCode,
      "vatNo":object.VATNo,
      "createdBy": "Saleem",
      "editedBy": "saleem",
      "supplimentaryVATNo":object.SupplimentaryVATNo,
      "objPrimaryAddess":{
        "companyCode":object.Code,
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
        "companyCode":object.Code,
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
      }
      
    }
console.log(companyObj)
    return companyObj
  }
  updateCurrentCompanyData(value:NgForm)
  {
   
    this._obj.postCompanySettingData(this.userObject(value.value)).subscribe(res=>
      {
       swal.fire('Data Updated Successfully','','success')
       .then(()=>
       {
         window.location.reload()
       })
      })
  }
  addNewCompanyData(value:NgForm)
  {

    this._obj.postCompanySettingData(this.userObject(value.value)).subscribe(res=>
      {
        Swal.fire('Data Submitted Successfully','','success')
        .then(()=>
        {
          window.location.reload()
        })
      })
  }
  

}
