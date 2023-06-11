import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: "root"
  }
)

//Logger Service

export class LoggerService {

  constructor() { }

  Log(msg: string) {
   console.log(msg);
  } 
}
