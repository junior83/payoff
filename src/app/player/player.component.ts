import {Component, OnInit} from '@angular/core';
import {Player} from "../player";
import {PLAYERS} from "../players";

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  players = PLAYERS;
  selectedPlayer!: Player;

  summary!: String;

  constructor() {
  }

  ngOnInit(): void {

  }


  onSelect(hero: Player) {
    this.selectedPlayer = hero;
  }

  settle() {
    this.summary = "";
    for (let player of this.players) {
      player.balance = player.chips - player.buyin;
      player.summary = ""
    }

    function chipsToMoney(chips: number) {
      let m = chips /10
      return m.toFixed(2) + "zł";
    }
    for (let i = 0; i < this.players.length; i++) {

    }
    for (let i = 0; i < this.players.length; i++) {
      let curPlayer: Player | undefined;
      let maxPlayer: Player | undefined;
      // var b: Player = null;
      // curPlayer = this.players[0]
      // curPlayer = null;
      for (let player of this.players) {
        if (player.balance < 0) {
          if (curPlayer == null) {
            curPlayer = player;
          } else if (Math.abs(player.balance) < Math.abs(curPlayer.balance)) {
            curPlayer = player;
          }
        }
        if (maxPlayer == null) {
          maxPlayer = player;
        } else if (player.balance > maxPlayer.balance) {
          maxPlayer = player;
        }
      }
      if (curPlayer != null && maxPlayer != null) {
        let number = Math.min(Math.abs(curPlayer.balance),Math.abs(maxPlayer.balance));
        curPlayer.balance +=number;
        curPlayer.summary += " Płaci " + chipsToMoney(number) + " " + maxPlayer.name;
        maxPlayer.balance -=number;
        maxPlayer.summary += " Otrzymuje " + chipsToMoney(number) + " od " + curPlayer.name;
        this.summary += " " +  curPlayer.name + " płaci " + number + " " + maxPlayer.name +  " \n ";
      }

    }
  }

}
