import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
baseUrl:any='https://localhost:44353/';

  constructor(private _http:HttpClient) { }

 
 //get 
 public getallusers(){
   return this._http.get(this.baseUrl+`api/get/all`);
 }
 //post
 public postUsers(user:any){
   return this._http.post(this.baseUrl+`api/user/post/`,user);
 }
//get email password user
public getEmailPassword(email:string,password:string){
  return this._http.get(this.baseUrl+`api/get/nameemail/${email}/${password}`);
}
//get email password admin
public admin(email:string,password:string){
  return this._http.get(this.baseUrl+`api/adminemailPassword/bynames/${email}/${password}`);
}
//get email password superadmin
public superAdmin(email:string,password:string){
  return this._http.get(this.baseUrl+`api/get/emailPasswordSuperAdmin/${email}/${password}`);
}
//get admin by id
public adminById(user_id:number){
  return this._http.get(this.baseUrl+`api/get/byIds/${user_id}`);
}

//update(put) admin by id
// public adminUpdateById(user_id:number,admin:any){
//   return this._http.put(this.baseUrl+`api/updates/byids/${user_id}`,admin);
// }
//update name mobilenumber admin
public adminNameMobilenumberUpdate(user_id:number,admin:any){
  return this._http.put(this.baseUrl+`api/updatesbyName/byMobile/${user_id}`,admin);
}

//get userby id mobilenumber password admin
public getUserById(id:number){
  return this._http.get(this.baseUrl+`api/get/byIds/${id}`);
}

//get all adimin using search bar
// public getbySearchBar(){
//   return this._http.get(this.baseUrl`api/get/alladmin`);
// }
}