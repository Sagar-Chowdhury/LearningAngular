import { Component } from '@angular/core';
import { RoomList } from './room';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

   isVisible :boolean =true;  
   
   currentUser:string = "Admin"
 

  roomList: RoomList[] = [
    {
      roomNumber: 101,
      roomType: 'Standard',
      amenities: 'Wi-Fi, TV, Air Conditioning',
      price: 100,
      photos: 'room101.jpg',
      checkInTime: new Date('2023-06-05T14:00:00'),
      checkoutTime: new Date('2023-06-06T12:00:00'),
    },
    {
      roomNumber: 202,
      roomType: 'Deluxe',
      amenities: 'Wi-Fi, TV, Air Conditioning, Mini-bar',
      price: 200,
      photos: 'room202.jpg',
      checkInTime: new Date('2023-06-06T15:00:00'),
      checkoutTime: new Date('2023-06-07T11:00:00'),
    },
    {
      roomNumber: 303,
      roomType: 'Suite',
      amenities: 'Wi-Fi, TV, Air Conditioning, Mini-bar, Jacuzzi',
      price: 300,
      photos: 'room303.jpg',
      checkInTime: new Date('2023-06-07T13:00:00'),
      checkoutTime: new Date('2023-06-08T10:00:00'),
    },
    {
      roomNumber: 404,
      roomType: 'Standard',
      amenities: 'Wi-Fi, TV, Air Conditioning',
      price: 150,
      photos: 'room404.jpg',
      checkInTime: new Date('2023-06-08T15:00:00'),
      checkoutTime: new Date('2023-06-09T12:00:00'),
    },
    {
      roomNumber: 505,
      roomType: 'Deluxe',
      amenities: 'Wi-Fi, TV, Air Conditioning, Mini-bar',
      price: 250,
      photos: 'room505.jpg',
      checkInTime: new Date('2023-06-09T16:00:00'),
      checkoutTime: new Date('2023-06-10T13:00:00'),
    },
    {
      roomNumber: 606,
      roomType: 'Suite',
      amenities: 'Wi-Fi, TV, Air Conditioning, Mini-bar, Jacuzzi',
      price: 400,
      photos: 'room606.jpg',
      checkInTime: new Date('2023-06-10T14:00:00'),
      checkoutTime: new Date('2023-06-11T11:00:00'),
    },
    // Add more objects as needed
  ];
  
  toggle(){
    this.isVisible =!this.isVisible
  }
  
  myStyles = {
    'color': 'blue',
    'font-size': '16px',
    'font-weight': 'bold'
  };


}
