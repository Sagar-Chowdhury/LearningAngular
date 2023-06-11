import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RoomList } from '../room';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush //avoids uncessary 
})                                               //nput properties change or when an event is emitted 
                                                //from the component or one of its children
export class RoomsListComponent implements OnInit ,OnChanges {
    

   @Input() rooms: RoomList[]=[]; //can take input from any source
   
   @Output() selectedRoom = new EventEmitter<RoomList>(); //sends data via an event.

   //illustrating ngOnChanges
   @Input() fullName!:String 
   declare message:string


   constructor(){}
    
  ngOnInit(): void {
    
  }
 

  ngOnChanges(changes:SimpleChanges): void{
    
    if(changes['fullName'])
    {
      this.message = changes['fullName'].currentValue.toUppercase()
    }

  }

 selectRoom(room:RoomList){
  this.selectedRoom.emit(room)
 }

}
