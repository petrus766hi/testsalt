import { Component, OnInit } from '@angular/core';
import {VideosService} from '../videos/videos.service'
import {AllserviceService} from '../service/allservice.service'
@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private videosservice: VideosService, private allservice: AllserviceService) { }

  data : Array<any>
  image: String
  ngOnInit(): void {
    this.gets()
  }

  gets(){
    this.videosservice.getChannels().subscribe((response : any) =>{
      this.data = response
    })
    this.allservice.getId().subscribe((response: any) =>{
      this.image = response.download_url
    })
  }
}
