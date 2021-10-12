import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-view-users',
  templateUrl: './view-users.component.html',
  styleUrls: ['./view-users.component.scss']
})
export class ViewUsersComponent implements OnInit {
viewUsers:any[]=[];
  constructor(private _service:DataService) { }

  // get by users
  public getViewAllUsers(){
    this._service.getallusers().subscribe(
      (response:any)=>{
        this.viewUsers=response;
        console.log(response);
      },
      (error:any)=>console.log(error)
      )
    
  }


  ngOnInit(): void {
    this.getViewAllUsers();
  }

}
