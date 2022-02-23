import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CrmApiService {

  url_Company_Setting = 'https://innovativev.com.pk/WebAPI/api/Company/List'
  ul_Company_Setting_Insert = 'https://innovativev.com.pk/WebAPI/api/Company/Save'

  url_Sales_Person_Insert = 'https://innovativev.com.pk/WebAPI/api/SalesPerson/Save'
  url_Sales_Person_List = 'https://innovativev.com.pk/WebAPI/api/SalesPerson/List'
  url_Sales_Person_Read = 'https://innovativev.com.pk/WebAPI/api/SalesPerson/List'

  url_Country_List = 'https://innovativev.com.pk/WebAPI/api/Country/List?pCompanyCode='
  url_Country_Save = 'https://innovativev.com.pk/WebAPI/api/Country/Save'
  url_Country_Read = 'https://innovativev.com.pk/WebAPI/api/Country/Read'

  url_ShippingMethod_List = 'https://innovativev.com.pk/WebAPI/api/ShippingMethod/List?pCompanyCode='
  url_ShippingMethod_Save = 'https://innovativev.com.pk/WebAPI/api/ShippingMethod/Save'
  url_ShippingMethod_Read = 'https://innovativev.com.pk/WebAPI/api/ShippingMethod/Read'

  url_Contacts_List = 'https://innovativev.com.pk/WebAPI/api/CRM_Contact/List/'
  url_Contacts_Save = 'https://innovativev.com.pk/WebAPI/api/CRM_Contact/Save'
  url_Contacts_Read = 'https://innovativev.com.pk/WebAPI/api/CRM_Contact/Read'

  url_activity_save = 'https://innovativev.com.pk/WebAPI/api/CRM_Activity/Save'
  url_activity_read = 'https://innovativev.com.pk/WebAPI/api/CRM_Activity/List'

  url_Users_Login   = 'https://innovativev.com.pk/WebAPI/api/Users/LoginWithQueryString/'
  url_Users_SignUp  = 'https://innovativev.com.pk/WebAPI/api/Users/Save'
  constructor(private http:HttpClient) { }
  getUserLogin(username:any , password:any){
    return this.http.get(this.url_Users_Login+username+'/'+password)
  }
  postSignUpData(values:any){
    return this.http.post(this.url_Users_SignUp,values)

  }
  getCompanySettingData()
  {
    return this.http.get(this.url_Company_Setting)
  }
  postCompanySettingData(values:any)
  {
    return this.http.post(this.ul_Company_Setting_Insert,values)
  }

  getSalesPersonData(value:any)
  {
    return this.http.get(this.url_Sales_Person_List+'/'+value)
  }
  postSalesPersonData(values:any)
  {
    return this.http.post(this.url_Sales_Person_Insert,values)
  }

  getCountryData(value:any)
  {
    return this.http.get(this.url_Country_List+value)
  }
  postCountryData(values:any)
  {
    return this.http.post(this.url_Country_Save,values)
  }

  getShippingMethodData(value:any)
  {
    return this.http.get(this.url_ShippingMethod_List+value)
  }
  postShippingMethodData(values:any)
  {
    return this.http.post(this.url_ShippingMethod_Save,values)
  }

  getContactsData(value:any)
  {
    return this.http.get(this.url_Contacts_List+value)
  }
  postContactsData(values:any)
  {
    return this.http.post(this.url_Contacts_Save,values)
  }
  postActivityData(values:any)
  {
    return this.http.post(this.url_activity_save,values)
  }
  getActivityData()
  {
    return this.http.get(this.url_activity_read)
  }
}
