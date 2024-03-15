import { Component, OnInit, ViewChild } from '@angular/core';
import { MeetingRoom, meetingRooms } from '../service/meeting-room';

@Component({
  selector: 'app-use-mat-table',
  templateUrl: './use-mat-table.component.html',
  styles: [
  ]
})
export class UseMatTableComponent implements OnInit {

  displaySequence: string[] = ["id", "name", "size", "projector", "tv"];
  constructor() {

  }

  ngOnInit(): void {

  }

  RowClick(row: any) {
    console.log(row);
  }
  getTotalSize(){
    return meetingRooms.map(r => r.size).reduce((previousValue,currentValue)=> previousValue+currentValue);
  }

}
