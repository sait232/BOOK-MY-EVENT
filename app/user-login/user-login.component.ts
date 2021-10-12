import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  passwordPattern:string="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$";
  emailpattern:string="^[a-zA-Z0-9.!#$%&amp;'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  LoginForm:any=FormGroup;
  // array:any[]=[];
 errormessage:any;
//  errormessage1:any;
 isActive:boolean=false;
  constructor(private _fb:FormBuilder,private _servicing:DataService,private _router:Router) { }
createForm(){
  this.LoginForm=this._fb.group(
    {
      'email':new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
      'password':new FormControl('',[Validators.required,Validators.pattern(this.passwordPattern)]),
    }
  )
}
  ngOnInit(): void {
    this.createForm();
  }
  public getEmail(){
    return this.LoginForm.get('email');
  }
  public getPassword(){
    return this.LoginForm.get('password'); 
    }

    //get email password user
    public emailpasswordretrieval(){

      if(this.LoginForm.value.email=="admin@gmail.com",this.LoginForm.value.password=="Admin@123" )
      {
        this.getAdmin();
        
      }
      if(this.LoginForm.value.email=="superadmin@gmail.com",this.LoginForm.value.password=="Super@123" )
      {
        
        this.getSuperAdmin();
      }
      else{
      this._servicing.getEmailPassword(this.LoginForm.value.email,this.LoginForm.value.password).subscribe(
        (response:any)=>{
         
         if(response==null){

          this.errormessage="login falied";
          this.isActive=true;
         }
         else{
          console.log(response);
          // this.errormessage="login sucess";

          this._router.navigate(['user-home']);
         this.isActive=false;
         }
        },

        (error:any)=>{
           console.log(error); 
        }
      )
      }
    }
    // email password admin
    public getAdmin(){
      this._servicing.admin(this.LoginForm.value.email,this.LoginForm.value.password).subscribe(
        (response:any)=>{
          if(response==null){

            this.errormessage="login falied";
            this.isActive=true;
           
           
           }
           else{
            console.log(response);
         
  
            this._router.navigate(['admin-home']);
           this.isActive=false;
           }
        
        },
       (error:any)=>{
         console.log(error);
         
       }  
      )
        } 
        //super admin email password
        public getSuperAdmin(){
          this._servicing.superAdmin(this.LoginForm.value.email,this.LoginForm.value.password).subscribe(
            (response:any)=>{
              if(response==null){
    
                this.errormessage="login falied";
                this.isActive=true;
               
               
               }
               else{
                console.log(response);
             
      
                this._router.navigate(['user-SuperAdmin']);
               this.isActive=false;
               }
            
            },
           (error:any)=>{
             console.log(error);
             
           }  
          )
        }
    }


