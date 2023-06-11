import { AfterViewInit, Component, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { RoomsComponent } from './rooms/rooms.component';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,OnInit {
 
  
  title = 'hotelinventoryapp';

  @ViewChild('user',{ read:ViewContainerRef }) vcr!: ViewContainerRef
  

  constructor(@Optional() private loggerService:LoggerService){}
  ngOnInit(): void {
    this.loggerService?.Log('AppComponent ngOnInit');

  }

  //dynamically creates component
  ngAfterViewInit(): void {
    const compontRef = this.vcr.createComponent(RoomsComponent);
    
  }
 
}
