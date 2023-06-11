import { Inject, Injectable } from '@angular/core';
import { RoomList } from '../room';
import { environment } from 'src/environments/environment';
import { APP_SERVICE_CONFIG } from 'src/app/AppConfig/appconfig.service';
import { AppConfig } from 'src/app/AppConfig/appconfig.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

   roomList :RoomList[] = [];
  

  constructor(  @Inject(APP_SERVICE_CONFIG) private config: AppConfig  , private http:HttpClient) {

    
    
    console.log(this.config.apiEndpoint );
    console.log("Room Servive has been initialized");
    
   }
  
  getRooms()  { 
    // return this.roomList;
    return this.http.get<RoomList[]>('/api/rooms');
   }
 
   addRoom(room:RoomList){
    return this.http.post('/api/rooms',room)
   } 


}
