import { Component, OnInit } from '@angular/core';
import {AllserviceService} from '../service/allservice.service'

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  data : Array<any>
  image : String
  constructor(private allservice: AllserviceService) {}

  ngOnInit(): void {
    this.gets()
  }
  gets(){
    this.allservice.getPeople().subscribe((response : any) =>{
      console.log('xxx', response.data.slice(0,2))
      this.data = response.data.slice(0,2)
    })
    this.allservice.getId().subscribe((response: any) =>{
      this.image = response.download_url
    })
  }
}
