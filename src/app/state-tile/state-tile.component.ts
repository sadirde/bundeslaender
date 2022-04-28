import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-state-tile',
  templateUrl: './state-tile.component.html',
  styleUrls: ['./state-tile.component.css']
})
export class StateTileComponent implements OnInit {

  @Input() state: string;
  @Input() schoolCount: number;

  constructor() {
    this.state = "";
    this.schoolCount = 0;
  }

  ngOnInit(): void {
  }

}
