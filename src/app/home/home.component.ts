import { Component, OnInit } from '@angular/core';
import Data from '../../assets/bundesland.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  states = Data.stateList;
  persons: string[] = [];

  constructor() { }

  ngOnInit(): void {
    // Quick & dirty solution, just to circumvent the TS error
    type letter = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g' | 'h' | 'i' | 'j' | 'k' | 'l' | 'm' | 'n' | 'o' | 'p' | 'q' | 'r' | 's' | 't' | 'u' | 'v' | 'w' | 'x' | 'y' | 'z';

    for (const person in Data.personIndexCounts) {
      const index: letter = <letter>person;
      if (Data.personIndexCounts.hasOwnProperty(index) && Data.personIndexCounts[index] > 0) {
        this.persons.push(index);
      }
    }
  }

}
