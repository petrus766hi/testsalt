import { Component, OnInit } from '@angular/core';
import {ChannelsService} from '../channels/channels.service'
@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.css']
})
export class ChannelsComponent implements OnInit {

  constructor(private channelsservice: ChannelsService) { }

  dataChannel : Array<any>

  ngOnInit(): void {
    this.gets()
  }

  gets(){
    this.channelsservice.getChannels().subscribe((response : any) =>{
      this.dataChannel = response
    })
  }
}
