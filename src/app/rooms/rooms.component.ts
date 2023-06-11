import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RoomList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,AfterViewInit {

   isVisible :boolean =true;  
   currentUser:string = "Admin"
   roomList: RoomList[] =[];
   currentRoom!:RoomList
   @ViewChild(HeaderComponent) headerComponent!:HeaderComponent
  toggle(): void{
    this.isVisible =!this.isVisible
  }
  selectRoom(room:RoomList){
    this.currentRoom=room
    
   }
  myStyles = {
    'color': 'blue',
    'font-size': '16px',
    'font-weight': 'bold'
  };
   
  //declarring a new observeable basically a stream of data
   stream = new Observable(observer =>{
          observer.next("User1");
          observer.next("User2");
          observer.next("User3");
          observer.complete();  //push mechanism ended

   });  


   
   





  constructor( private roomService:RoomsService ){}

  ngOnInit(): void {
    console.log(this.headerComponent);
     this.roomService.getRooms().subscribe(room =>{
            this.roomList=room;
     })
     //subscribing to the stream observable
     this.stream.subscribe({
      next: (value)=>console.log(value),
      complete:()=>console.log("complete"),
      error:(err)=>console.log(err)
      
      })
    
    

  }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = "View Child Done"
    
  }

  


}
