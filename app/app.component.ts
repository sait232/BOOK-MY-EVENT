import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';
export class Users {
  Username:string="";
  Email:string="";
  Password:string="";
  Mobile_number:number | undefined;
  Gender:string="";
  Address:string="";
  Dob:string="";
  Created_date:Date | undefined;
  Updated_date:Date | undefined;
  Login_time:Date | undefined;
  Logout_time:Date | undefined;

  constructor(Username: string,Email: string,Password: string, Mobile_number: number,Gender: string,Address: string,Dob:string,Created_date: Date,Updated_date: Date, Login_time: Date, Logout_time: Date){
     this.Username=Username;
     this.Email=Email;
     this.Password=Password;
     this. Mobile_number= Mobile_number;
     this. Gender= Gender;
     this.Address=Address;
     this.Created_date=  Created_date;
     this.Updated_date=Updated_date;
     this.Login_time=Login_time;
     this.Logout_time=Logout_time;
    

  }
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'BOOKMYEVENT';
  searchBar:any;
  arraySearch:any[]=[];
  // Username:any;
  Email:string='';
// input1:string='';
// input2:any='';
number1:any;
number2:any;
number3:any;
number4:any;
number5:any;
number6:any;
number7:any;
radio1:any;
isActive:boolean=false;
isActive1:boolean=true;

constructor(private _service:DataService,private _fb:FormBuilder) {
 }
 
//abhi calculator task
total1(){
  
 if(this.number4.checked){

  this.number3=Number(this.number1)+Number(this.number2);
 }
 if(this.number5.checked){

  this.number3=Number(this.number1)+Number(this.number2);
  
 }
 if(this.number6.checked){

  this.number3=Number(this.number1)+Number(this.number2);
  
 }
 if(this.number7.checked){

  this.number3=Number(this.number1)+Number(this.number2);
 }

}
 

     
        
        
      


 
  // this.number3==true;
  


//  this.substraction();
  
    
    // this.number3=this.number1*this.number2; 
    // this.number3=this.number1/this.number2;
    // console.log(this.number3);



    // console.log(this.number3);
    // calculatorButton1(){
    //   this.substraction();
    //   this.number3=this.number1-this.number2; 
    //   console.log(this.number3); 
    // }
    // calculatorButton2(){
    //   this. multiplication();
    //   this.number3=this.number1*this.number2; 
    //   console.log(this.number3); 
    // }
    // calculatorButton3(){

    //   this. multiplication();
    //   this.number3=this.number1/this.number2; 
    //   console.log(this.number3); 
    // }
   
   


// this.multiplication();
// this.number3=Number(this.number1)*Number(this.number2); 
// console.log(this.number3); 

// this.division();
// this.number3=Number(this.number1)/Number(this.number2); 
// console.log(this.number3); 





 
// createForm2(){
    // this.searchBar=this._fb.group(
    //   {
    //     'Username':new FormControl('',[Validators.required,]),
    //     'Email':new FormControl('',[Validators.required,]),
    //     'Password':new FormControl('',[Validators.required,]),
    //     'Mobile_number':new FormControl('',[Validators.required]),
    //     'Gender':new FormControl('',[Validators.required]),
    //     'Dob':new FormControl('',[Validators.required]),
    //     'Address':new FormControl('',[Validators.required]),
    //     'Created_date':new FormControl('',[Validators.required]),
    //     'Updated_date':new FormControl('',[Validators.required]),
    //     'Login_time':new FormControl('',[Validators.required]),
    //     'Logout_time':new FormControl('',[Validators.required])
  
    //   }

  

    // )
    // this.searchBar = new FormGroup({
    // Email:new FormControl()
    // });
   
   
//     }
   

    searchingBar(){
      this._service.getallusers().subscribe(
        (response:any)=>{
          this.arraySearch=response;
          console.log(response);
        },
        
        (error:any)=>console.log(error)
      )
    }
search(){
 if(this.Email==""){
   this.searchingBar();
 } 
 else{
   this.arraySearch=this.arraySearch.filter(res=>{
     return res.Email.toLowerCase().match(this.Email.toLowerCase());
   })
 }
}


ngOnInit(): void {
 this.searchingBar();
 
}




}

