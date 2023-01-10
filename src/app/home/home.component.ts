import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayname="";
  submit(val:string){
    this.displayname=val
  }
  constructor() { }

  ngOnInit(): void {
  }
  
}
