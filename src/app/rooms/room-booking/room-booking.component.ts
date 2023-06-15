import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room-booking',
  templateUrl: './room-booking.component.html',
  styleUrls: ['./room-booking.component.scss']
})
export class RoomBookingComponent implements OnInit {

  constructor( private router:ActivatedRoute ){}
   
  id$ = this.router.snapshot.paramMap.get( 'id' ); //one more way to get id from params


  idDisplay:number =0

  ngOnInit(): void {
    this.router.params.subscribe(params =>{ this.idDisplay = params['id'] });
  }

}
