import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room';
import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

   roomList :RoomList[] = [];
   //$ sign refes to a stream
   getRooms$ = this.http.get<RoomList[]>('/api/rooms').pipe(
    shareReplay(1)
   )
   

  constructor(  @Inject(APP_SERVICE_CONFIG) private config: AppConfig  , private http:HttpClient) {

    
    
    console.log(this.config.apiEndpoint );
    console.log("Room Servive has been initialized");
    
   }
  
  getRooms()  { 
    // return this.roomList;
    return this.http.get<RoomList[]>('/api/rooms');
   }
 
   addRoom(room:RoomList){
    return this.http.post<RoomList[]>('/api/rooms',room)
   } 
      
   editRoom(room:RoomList){
     
    return this.http.put<RoomList[]>(`/api/rooms/${room.roomNumber}`,room);
      
    
  }
   
  deleteRoom(room:RoomList){
    return this.http.delete<RoomList[]>(`/api/rooms/${room.roomNumber}`);
  }
  
  getPhotos(){

    //request framed 
    const request = new HttpRequest(
      'GET','https://jsonplaceholder.typicode.com/photos',
      {
        reportProgress:true
      })
    
      //request sent.
    return this.http.request(request)
  }
  

}
