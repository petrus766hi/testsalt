import { Component, OnInit } from '@angular/core';
import {ActivityService} from '../activity/activity.service'
@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  constructor(private activityservice: ActivityService) { }
  dataPeople : Array<any>

  ngOnInit(): void {
    this.gets()
  }

  gets(){
    this.activityservice.getPeople().subscribe((response : any) =>{
      this.dataPeople = response.data
    })
  }
}
