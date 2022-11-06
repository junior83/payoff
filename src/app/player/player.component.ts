import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Player} from "../player";
import {PLAYERS, SUMMARY} from "../players";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players = PLAYERS;




  constructor() {
  }

  ngOnInit(): void {

  }


}
