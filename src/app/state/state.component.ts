import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Data from '../../assets/bundesland.json';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  state = '';

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const stateFromRoute = this.route.snapshot.paramMap.get('bundesland') || '';
    
    // Ignore state if it doesn't exist
    for (const state of Data.stateList) {
      // Getting state from .url instead of .name because of umlauts
      if (state.url.match(/\/([^/]+)$/)?.[1].toLowerCase() === stateFromRoute.toLowerCase()) {
        this.state = stateFromRoute;
        break;
      }
    }
  }

}
