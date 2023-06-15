import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { RoomList } from './room';
import { HeaderComponent } from '../header/header.component';
import { RoomsService } from './services/rooms.service';
import { Observable } from 'rxjs';
import { HttpEventType, HttpRequest } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit,AfterViewInit {

   totalBytesLoaded =0
   isVisible :boolean =true;  
   currentUser:string = "Admin"
   roomList: RoomList[] =[];
   currentRoom!:RoomList

   rooms$ = this.roomService.getRooms$

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


   
   





  constructor( private roomService:RoomsService , private router:Router){}

  ngOnInit(): void {
    console.log(this.headerComponent);


    //  this.roomService.getRooms$.subscribe(room =>{
    //         this.roomList=room;
    //  })


     //subscribing to the stream observable
     this.stream.subscribe({
      next: (value)=>console.log(value),
      complete:()=>console.log("complete"),
      error:(err)=>console.log(err)
      
      })
      
      //subscribing to receive photos
      this.roomService.getPhotos().subscribe((event) =>{
            //console.log(photo); //problem with logging here is that it logs data at varoious levels of loading.
            
            switch(event.type)
            {
              case HttpEventType.Sent:{
                 
                console.log("Request Sent");
                 
                break;
              }
              case HttpEventType.ResponseHeader:{

                console.log("Request Success");
                
                break;
              }
              case HttpEventType.DownloadProgress:{
                this.totalBytesLoaded+=event.loaded
                break
              }
              case HttpEventType.Response:{
                     console.log(event.body);
                     
              }
            }


            
     })



    

  }
  ngAfterViewInit(): void {
    console.log(this.headerComponent);
    this.headerComponent.title = "View Child Done"
    
  }


  //add method attached to button
  addRoom(){
        
    const room : RoomList = {
      roomNumber:'609',
      roomType: 'Standard69',
      amenities: 'Wi-Fi, TV, Air Conditioning',
      price: 100,
      photos: 'room101.jpg',
      checkInTime: new Date('2023-06-05T14:00:00'),
      checkoutTime: new Date('2023-06-06T12:00:00'),
      rating: 4,
    
    };

    this.roomService.addRoom(room).subscribe(data =>{
          this.roomList = data;
        })
  


  }


  //edit method attached to a button.
  editRoom(){
     
    const room : RoomList = {
      roomNumber:'3',
      roomType: 'Standard108',
      amenities: 'Wi-Fi, TV, Air Conditioning',
      price: 100,
      photos: 'room101.jpg',
      checkInTime: new Date('2023-06-05T14:00:00'),
      checkoutTime: new Date('2023-06-06T12:00:00'),
      rating: 4,
    
    };

    this.roomService.editRoom(room).subscribe(data =>{
              this.roomList = data;
            })



  }


  //delete method attached to a button.
  deleteRoom(){
     
    const room : RoomList = {
      roomNumber:'3',
      roomType: 'Standard108',
      amenities: 'Wi-Fi, TV, Air Conditioning',
      price: 100,
      photos: 'room101.jpg',
      checkInTime: new Date('2023-06-05T14:00:00'),
      checkoutTime: new Date('2023-06-06T12:00:00'),
      rating: 4,
    
    };
     
    this.roomService.deleteRoom(room).subscribe(data =>{
                  this.roomList = data;
                })


  }

  navigate(){
    this.router.navigate(['/rooms','login']);

  }
  



}

