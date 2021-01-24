import { Component, OnInit } from '@angular/core';
import {AllserviceService} from '../service/allservice.service'


@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  constructor( private allservice: AllserviceService) { }
  data : Array<any>

  ngOnInit(): void {
    this.gets()
  }

  gets(){
    this.allservice.getAll().subscribe((response : any) =>{
      this.data = response
    })
  }
}
