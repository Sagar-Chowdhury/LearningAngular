  import { Component } from '@angular/core';
import { RoomList } from '../room';
import { RoomsService } from '../services/rooms.service';
 


@Component({
  selector: 'app-rooms-add',
  templateUrl: './rooms-add.component.html',
  styleUrls: ['./rooms-add.component.scss']
})

export class RoomsAddComponent {

  room: RoomList = {
    roomNumber: '',
    roomType: '',
    amenities: '',
    price: 0,
    photos: '',
    checkInTime: new Date(),
    checkoutTime: new Date(),
    rating: 0
  };
   
  successMessage!: string

  constructor(private roomService:RoomsService){}

  submitForm(){
     
    console.log("Form submission Complete");
    console.log(this.room);
    this.roomService.addRoom(this.room).subscribe(room =>{
      
      this.successMessage = "Room added successfully"

    });
    
    


  }

}
